import Heading from "@/components/Heading";
import getMyRooms from "@/app/actions/getMyRooms";
import MyRoomsCard from "@/components/MyRoomCard";

const MyRoomsPage = async () => {
  const rooms = await getMyRooms();
  return (
    <>
      <Heading title='My rooms' />
      {rooms.length > 0 ? (
        rooms.map((room) => <MyRoomsCard room={room} key={room.$id} />)
      ) : (
        <p>You have no room listing</p>
      )}
    </>
  );
};

export default MyRoomsPage;
