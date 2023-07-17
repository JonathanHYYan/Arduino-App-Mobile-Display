import Toggle from "../Utlity/Toggle";
import { SettingsControl, Week, Times, Alert } from "./ApplianceControlsStyles";
import DayIcons from "../Utlity/DayIcons";
import EditableText from "../Utlity/EditableText";

const ApplicationSettings = ({ rooms, setDataBase, activeSetting }) => {
  // Variable holding setting jsx render props.rooms if settings is avaibable
  const configure = rooms.map((room) => {
    const controls = room.settings?.map((setting, index) => {
      if (
        activeSetting.name === room.appliance.names[index] &&
        activeSetting.index === index
      ) {
        return (
          <>
            <EditableText
              text={room.appliance.names[index]}
              setDataBase={setDataBase}
              data={rooms}
            />
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
      }
    });
    return <>{controls}</>;
  });
  return <>{configure}</>;
};

export default ApplicationSettings;
