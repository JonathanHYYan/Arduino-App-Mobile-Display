import { DefaultPage } from "./MainPageStyles";
import RoomIcons from "../Rooms/RoomIcons";
import ApplianceControls from "../Appliance/ApplianceControls";
import { useState } from "react";
import { data } from "../../Assets/data";

const MainPage = () => {
  // A data set needs to be imported or fetched from firebase on what applicances is available
  const [database, setDataBase] = useState(data);
  const [roomSelected, setRoomSelected] = useState(data[0].room);
  const [settingToggle, setSettingToggle] = useState(false);

  const selectRoom = (roomName) => {
    setRoomSelected(roomName);
    setSettingToggle(false);
  };

  const newRooms = (room, id) => {
    const newRoom = {
      id: id,
      room: room,
      appliance: [],
    };
    setDataBase([...database, newRoom]);
    setRoomSelected(room.room);
  };

  return (
    <DefaultPage>
      <RoomIcons
        state={roomSelected}
        selectRoom={selectRoom}
        rooms={database}
        setSettingToggle={setSettingToggle}
      />
      <ApplianceControls
        settingToggle={settingToggle}
        setSettingToggle={setSettingToggle}
        rooms={database}
        state={roomSelected}
        newRooms={newRooms}
      />
    </DefaultPage>
  );
};

export default MainPage;
