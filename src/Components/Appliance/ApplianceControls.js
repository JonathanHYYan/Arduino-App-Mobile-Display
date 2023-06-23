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

const ApplianceControls = ({ rooms, state, newRooms, viewSettings, setViewSettings }) => {
  const appliances = rooms.map((obj) => {
    const controls = obj.appliance.names.map((name, index) => {
      return (
        <Appliance key={index} selected={state[index]}>
          <p>{name}</p>
          <Settings>
            <Toggle state={obj.appliance.boolean[index]} />
            <Gear onClick={()=>setViewSettings(true)}/>
          </Settings>
        </Appliance>
      );
    });
    return <>{controls}</>;
  });

  const updateRooms = (room) => {
    newRooms(room);
    setViewSettings(false);
  };


  return (
    <Appliances>
      <h2>Applicances</h2>
      {!viewSettings && appliances}
      {state.includes(null) && (
        <IconGrid selected={true}>
          <NewIcon updateRooms={updateRooms} />
        </IconGrid>
      )}
      {!state.includes(null) && !viewSettings ? (
        <AddControl>
          <Plus />
        </AddControl>
      ): null}

    </Appliances>
  );
};

export default ApplianceControls;
