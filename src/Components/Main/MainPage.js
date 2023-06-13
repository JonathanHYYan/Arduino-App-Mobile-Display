import {
  DefaultPage,
} from "./MainPageStyles";
import RoomIcons from "../Rooms/RoomIcons";
import ApplianceControls from "../Appliance/ApplianceControls";
import { useState } from "react";
import { useEffect } from "react";

const MainPage = () => {
  // A data set needs to be imported or fetched from firebase on what applicances is available
  // Based on the data the applicance icon should show in the nav and the options in controls
  // lighter shade of orange #F5B181
  const [roomSelected, setRoomSelected] = useState([true,false])

  const handleClick = (index) => {
    const updateRooms = roomSelected.map((room, i) =>
      i === index ? true : false
    );
    setRoomSelected(updateRooms);
  };

  return (
    <DefaultPage>
      <RoomIcons state={roomSelected} onClick={handleClick}/>
      <ApplianceControls state={roomSelected}/>
    </DefaultPage>
  );
};

export default MainPage;
