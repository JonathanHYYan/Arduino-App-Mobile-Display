import { Kitchen, Bed, Icon, Plus, AddIcon, Rooms } from "./RoomiconsStyles";

// Renders icons into the room navigation
const RoomIcons = ({ state, selectRoom, rooms, setSettingToggle }) => {
  // Renders Icons based on the room name from database objects
  const roomOptions = rooms.map((room, index) => {
    const roomSelect =
    room.room === "kitchen" ? <Kitchen /> : room.room === "bed" ? <Bed /> : "";
    return (
      <Icon
        key={room.id}
        selected={state === room.id ? true : false}
        onClick={() => selectRoom(room.id)}
      >
        {roomSelect}
      </Icon>
    );
  });

  // Passes payload to MainPage to render new room options
  const addRoom = () => {
    selectRoom('add');
    setSettingToggle(false);
  };

  return (
    <Rooms>
      {roomOptions}
      <AddIcon>
        <Plus onClick={addRoom} />
      </AddIcon>
    </Rooms>
  );
};

export default RoomIcons;
