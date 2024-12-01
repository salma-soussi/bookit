"use server";

import { createAdminClient } from "@/config/appwrite";
import { ID } from "node-appwrite";

async function createUser(previousState, formDate) {
  const name = formDate.get("name");
  const email = formDate.get("email");
  const password = formDate.get("password");
  const confirmPassword = formDate.get("confirm-password");

  if (!email || !name || !password) {
    return {
      error: "Please fill all the fields",
    };
  }

  if (password.length < 8) {
    return {
      error: "Password mush be at be at least 8 character long",
    };
  }

  if (password !== confirmPassword) {
    return {
      error: "Passwords do not match",
    };
  }

  // Get account instance
  const { account } = await createAdminClient();

  try {
    // Create User
    await account.create(ID.unique(), email, password, name);

    return {
      success: true,
    };
  } catch (error) {
    console.log("Registration Error, ", error);
    return {
      error: "Could not register user",
    };
  }
}

export default createUser;
