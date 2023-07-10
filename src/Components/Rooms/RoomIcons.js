import { Kitchen, Bed, Icon, Plus, AddIcon, Rooms } from "./RoomiconsStyles";

const RoomIcons = ({ state, selectRoom, rooms, setSettingToggle }) => {
  const roomOptions = rooms.map((obj, index) => {
    const roomSelect =
      obj.room === "kitchen" ? <Kitchen /> : obj.room === "bed" ? <Bed /> : "";
    return (
      <Icon
        key={obj.room+index}
        selected={state[index]}
        onClick={() => selectRoom(index)}
      >
        {roomSelect}
      </Icon>
    );
  });

  const addRoom = () => {
    selectRoom(null);
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
