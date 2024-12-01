import Heading from "@/components/Heading";
import getMyBookings from "../actions/getmybookings";
import BookedRoomCard from "@/components/BookedRoomCard";

const BookingPage = async () => {
  const bookings = await getMyBookings();
  return (
    <>
      {bookings.length === 0 ? (
        <p className='text-gray-600 m-t-4'>You have no bookings</p>
      ) : (
        bookings.map((booking) => (
          <BookedRoomCard key={booking.$id} booking={booking} />
        ))
      )}
    </>
  );
};

export default BookingPage;
