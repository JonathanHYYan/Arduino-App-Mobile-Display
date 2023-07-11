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
import ApplicationSettings from "./ApplianceSettings";

const ApplianceControls = ({
  rooms,
  state,
  newRooms,
  settingToggle,
  setSettingToggle,
}) => {
  const [settingDisplay, setSettingDisplay] = useState({
    name: null,
    index: null,
  });

  // Variable holiding appliances currently registered to the device rendered from props.rooms
  const appliances = rooms.map((room) => {
    const controls = room.appliance.names.map((name, index) => {
      return (
          <Appliance key={index} selected={state[index]}>
            <p>{name}</p>
            <Settings>
              <Toggle state={room.appliance.boolean[index]} />
              <Gear onClick={() => updateSettings(name, index)} />
            </Settings>
          </Appliance>
      );
    });
    return <>{controls}</>;
  });

  const updateSettings = (name, index) => {
    setSettingToggle(!settingToggle);
    setSettingDisplay(name, index);
  };

  const updateRooms = (room) => {
    newRooms(room);
    setSettingToggle(false);
  };

  return (
    <Appliances>
      {!settingToggle ? (
        <h2>Applicances</h2>
      ) : (
        <ApplicationSettings rooms={rooms} />
      )}
      {!settingToggle && appliances}
      {state.includes(null) && (
        <IconGrid selected={true}>
          <NewIcon updateRooms={updateRooms} />
        </IconGrid>
      )}
      {!state.includes(null) && !settingToggle ? (
        <AddControl>
          <Plus />
        </AddControl>
      ) : null}
    </Appliances>
  );
};

export default ApplianceControls;
