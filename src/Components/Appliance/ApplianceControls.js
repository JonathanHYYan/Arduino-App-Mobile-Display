import {
  Appliances,
  Appliance,
  AddControl,
  Plus,
  Gear,
  Settings,
  IconGrid,
} from "./ApplianceControlsStyles";
import Toggle from "../Utlity/Toggle";
import NewIcon from "./NewIcon";
import { useState } from "react";
import ApplianceSettings from "./ApplianceSettings";

const ApplianceControls = ({
  rooms,
  state,
  newRooms,
  settingToggle,
  setSettingToggle,
}) => {
  const [activeSetting, setActiveSetting] = useState(null);
  // Variable holiding appliances currently registered to the device rendered from props.rooms
  const appliances = rooms.map((room) => {
    const controls = room.appliance.map((device) => {
      return (
        <Appliance
          key={room.id + device.id}
          selected={state === room.id ? true : false}
        >
          <p>{device.name}</p>
          <Settings>
            <Toggle state={device.switchOn} />
            <Gear onClick={() => updateSettings(device.id)} />
          </Settings>
        </Appliance>
      );
    });
    return <>{controls}</>;
  });

  // Calls back a payload for parent component to id which appliance is selected
  const updateSettings = (id) => {
    setSettingToggle(!settingToggle);
    setActiveSetting(id);
  };

  // Calls back room object with a number to use as an id
  const updateRooms = (room) => {
    newRooms(room, rooms.length);
    setSettingToggle(false);
  };

  return (
    <Appliances>
      {!settingToggle ? (
        <h2>Appliances</h2>
      ) : (
        <ApplianceSettings rooms={rooms} activeSetting={activeSetting} />
      )}
      {!settingToggle && appliances}
      {state === "add" && (
        <IconGrid selected={true}>
          <NewIcon updateRooms={updateRooms} />
        </IconGrid>
      )}
      {state === "add" && !settingToggle ? (
        <AddControl>
          <Plus />
        </AddControl>
      ) : null}
    </Appliances>
  );
};

export default ApplianceControls;
