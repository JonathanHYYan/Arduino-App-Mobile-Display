import { DefaultPage } from "./MainPageStyles";
import RoomIcons from "../Rooms/RoomIcons";
import ApplianceControls from "../Appliance/ApplianceControls";
import { useState } from "react";
import { data } from "../../Assets/data";

const MainPage = () => {
  // A data set needs to be imported or fetched from firebase on what applicances is available
  const [database, setDataBase] = useState(data);
  const [roomSelected, setRoomSelected] = useState([true, false]);
  const [settingToggle, setSettingToggle] = useState(false);

  const selectRoom = (index) => {
    const updateRooms = roomSelected.map((room, i) => {
      if (index != null) {
        return i === index ? true : false;
      } else {
        return null;
      }
    });
    setRoomSelected(updateRooms);
    setSettingToggle(false);
  };

  const newRooms = (room) => {
    const newRoom = {
      room: room,
      appliance: {
        names: [],
        boolean: [],
      },
    };
    setDataBase([...database, newRoom]);

    const updateRooms = roomSelected.map(() => {
      return false;
    });

    setRoomSelected([...updateRooms, true]);
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
