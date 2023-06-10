import { Kitchen, Bed, Icon, Plus, AddIcon, Rooms } from "./RoomiconsStyles";
import { data } from "../../Assets/data";

const RoomIcons = () => {
  const rooms = data.map((obj) => {
    const roomSelect =
      obj.room === "kitchen" ? <Kitchen /> : obj.room === "bed" ? <Bed /> : "";

    return <Icon key={obj.room}>{roomSelect}</Icon>;
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
