import {
  Appliances,
  Appliance,
  AddControl,
  Plus,
  Gear,
  Settings,
  IconGrid,
  Week,
  Times,
  SettingsControl,
  Alert,
} from "./ApplianceControlsStyles";
import Toggle from "../Utlity/Toggle";
import NewIcon from "./NewIcon";
import { useState } from "react";
import DayIcons from "../Utlity/DayIcons";

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

  // Variable holding setting jsx render props.rooms if settings is avaibable
  const configure = rooms.map((room) => {
    const controls = room.settings?.map((setting, index) => {
      return (
        <>
          <h2>{room.appliance.names[index]}</h2>
          <SettingsControl key={index} selected={true}>
            <p>Select days device will be active: </p>
            <Week>
              <DayIcons days={setting.days} />
            </Week>
            <Times>
              <p>Select time frames the device will switch on and off: </p>
            </Times>
            <Alert>
              <p>
                Enable vibrations to alert you when device starts and stops:
              </p>
              <Toggle state={setting.vibrate} />
            </Alert>
          </SettingsControl>
        </>
      );
    });
    return <>{controls}</>;
  });

  // Variable holiding appliances currently registered to the device rendered from props.rooms
  const appliances = rooms.map((room) => {
    const controls = room.appliance.names.map((name, index) => {
      return (
        <>
          <Appliance key={index} selected={state[index]}>
            <p>{name}</p>
            <Settings>
              <Toggle state={room.appliance.boolean[index]} />
              <Gear onClick={() => updateSettings(name, index)} />
            </Settings>
          </Appliance>
        </>
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
      {!settingToggle ? <h2>Applicances</h2> : configure}
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
