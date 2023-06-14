import { Kitchen, Bed, Icon, Plus, AddIcon, Rooms } from "./RoomiconsStyles";
import { data } from "../../Assets/data";

const RoomIcons = ({ state, onClick }) => {
  const rooms = data.map((obj, index) => {
    const roomSelect =
      obj.room === "kitchen" ? <Kitchen /> : obj.room === "bed" ? <Bed /> : "";
    return (
      <Icon
        key={obj.room}
        selected={state[index]}
        onClick={() => onClick(index)}
      >
        {roomSelect}
      </Icon>
    );
  });

  const addRoom = () => {
    onClick(null);
  };

  return (
    <Rooms>
      {rooms}
      <AddIcon>
        <Plus onClick={addRoom} />
      </AddIcon>
    </Rooms>
  );
};

export default RoomIcons;
