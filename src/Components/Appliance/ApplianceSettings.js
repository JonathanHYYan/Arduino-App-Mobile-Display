import Toggle from "../Utlity/Toggle";
import { SettingsControl, Week, Times, Alert } from "./ApplianceControlsStyles";
import DayIcons from "../Utlity/DayIcons";
import EditableText from "../Utlity/EditableText";

const ApplianceSettings = ({ rooms, activeSetting }) => {
  // Variable holding setting jsx render props.rooms if settings is avaibable
  const configure = rooms.map((room) => {
    const controls = room.appliance.map((device) => {
      if (
        activeSetting === device.id
      ) {
        return (
          <>
            <EditableText text={device.name} textTag={"h2"} />
            <SettingsControl key={device.name+device.id} selected={true}>
              <p>Select days device will be active: </p>
              <Week>
                <DayIcons days={device.settings.days} />
              </Week>
              <Times>
                <p>Select time frames the device will switch on and off: </p>
              </Times>
              <Alert>
                <p>
                  Enable vibrations to alert you when device starts and stops:
                </p>
                <Toggle state={device.vibrate} />
              </Alert>
            </SettingsControl>
          </>
        );
      }
    });
    return <>{controls}</>;
  });
  return <>{configure}</>;
};

export default ApplianceSettings;
