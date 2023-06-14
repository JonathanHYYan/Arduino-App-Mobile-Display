import { DefaultPage } from "./MainPageStyles";
import RoomIcons from "../Rooms/RoomIcons";
import ApplianceControls from "../Appliance/ApplianceControls";
import { useState } from "react";
import { useEffect } from "react";

const MainPage = () => {
  // A data set needs to be imported or fetched from firebase on what applicances is available
  const [roomSelected, setRoomSelected] = useState([true, false]);

  useEffect(() => {
    console.log(roomSelected);
  }, [roomSelected]);

  const handleClick = (index) => {
    const updateRooms = roomSelected.map((room, i) => {
      if (index != null) {
        return i === index ? true : false;
      } else {
        return null;
      }
    });
    setRoomSelected(updateRooms);
  };

  return (
    <DefaultPage>
      <RoomIcons state={roomSelected} onClick={handleClick} />
      <ApplianceControls state={roomSelected} />
    </DefaultPage>
  );
};

export default MainPage;
