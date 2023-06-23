import { DefaultPage } from "./MainPageStyles";
import RoomIcons from "../Rooms/RoomIcons";
import ApplianceControls from "../Appliance/ApplianceControls";
import { useState, useEffect, useRef } from "react";
import { data } from "../../Assets/data";

const MainPage = () => {
  // A data set needs to be imported or fetched from firebase on what applicances is available
  const isMounted = useRef(false);
  const [database, setDataBase] = useState(data);
  const [roomSelected, setRoomSelected] = useState([true, false]);

  useEffect(() => {
    console.log(roomSelected);
  }, [database]);

  const selectRoom = (index) => {
    const updateRooms = roomSelected.map((i) => {
      if (index != null) {
        return i === index ? true : false;
      } else {
        return null;
      }
    });
    setRoomSelected(updateRooms);
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
      />
      <ApplianceControls state={roomSelected} newRooms={newRooms} />
    </DefaultPage>
  );
};

export default MainPage;
