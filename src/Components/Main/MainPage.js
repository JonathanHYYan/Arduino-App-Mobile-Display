import { DefaultPage } from "./MainPageStyles";
import RoomIcons from "../Rooms/RoomIcons";
import ApplianceControls from "../Appliance/ApplianceControls";
import { useState } from "react";
import { data } from "../../Assets/data";

const MainPage = () => {
  // A data set needs to be imported or fetched from firebase on what applicances is available
  const [database, setDataBase] = useState(data);
  const [roomSelected, setRoomSelected] = useState(data[0].id);
  const [settingToggle, setSettingToggle] = useState(false);

  // Room Nav for room selection
  const selectRoom = (roomName) => {
    setRoomSelected(roomName);

    // Disables App setting content toggle
    setSettingToggle(false);
  };

  // Adds a new room to the local database which does not persist on reload
  const newRooms = (room, id) => {
    // Creates a new room object
    const newRoom = {
      id: id,
      room: room,
      appliance: [],
    };

    // Adds newly created object to existing database
    setDataBase([...database, newRoom]);
    setRoomSelected(room.id);
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
