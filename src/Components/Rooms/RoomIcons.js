import { Kitchen, Bed, Icon, Plus, AddIcon, Rooms } from "./RoomiconsStyles";
import { data } from "../../Assets/data";
import { useState } from "react";

const RoomIcons = () => {
  const [roomSelected, setRoomSelected] = useState([true, false]);

  const handleCLick = (index) => {
    const updateRooms = roomSelected.map((room, i) =>
      i === index ? true : false
    );
    setRoomSelected(updateRooms);
  };
  const rooms = data.map((obj, index) => {
    const roomSelect =
      obj.room === "kitchen" ? <Kitchen /> : obj.room === "bed" ? <Bed /> : "";

    return (
      <Icon
        key={obj.room}
        selected={roomSelected[index]}
        onClick={() => handleCLick(index)}
      >
        {roomSelect}
      </Icon>
    );
  });

  return (
    <Rooms>
      {rooms}
      <AddIcon>
        <Plus />
      </AddIcon>
    </Rooms>
  );
};

export default RoomIcons;
