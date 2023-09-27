import { DefaultPage } from "./MainPageStyles";
import RoomIcons from "../Rooms/RoomIcons";
import ApplianceControls from "../Appliance/ApplianceControls";
import { useState } from "react";
import { data } from "../../Assets/data";
import { Appliance, Room } from "../Utlity/NewRoomClass";

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
    // Creates a new room object, appliances are left as empty until added
    const newRoom = new Room(id, room, []);

    // Adds newly created object to existing database
    setDataBase([...database, newRoom]);
    setRoomSelected(room.id);
  };

  // Callback function to create a new appliance using classes
  const newAppliance = (room, name, id) => {
    const newAppliance = new Appliance()
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
        newAppliance={newAppliance}
      />
    </DefaultPage>
  );
};

export default MainPage;
