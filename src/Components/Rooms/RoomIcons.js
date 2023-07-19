import { Kitchen, Bed, Icon, Plus, AddIcon, Rooms } from "./RoomiconsStyles";

const RoomIcons = ({ state, selectRoom, rooms, setSettingToggle }) => {
  const roomOptions = rooms.map((room, index) => {
    const roomSelect =
    room.room === "kitchen" ? <Kitchen /> : room.room === "bed" ? <Bed /> : "";
    return (
      <Icon
        key={room.id}
        selected={state === room.room ? true : false}
        onClick={() => selectRoom(room.room)}
      >
        {roomSelect}
      </Icon>
    );
  });

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
