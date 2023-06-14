import {
  Appliances,
  Appliance,
  AddControl,
  Plus,
  Gear,
  Settings,
  IconGrid,
} from "./ApplianceControlsStyles";
import { data } from "../../Assets/data";
import Toggle from "../Utlity/Toggle";
import NewIcon from "./IconGrid";

const ApplianceControls = ({ state }) => {
  const appliances = data.map((obj) => {
    const controls = obj.appliance.names.map((name, index) => {
      return (
        <Appliance key={name} selected={state[index]}>
          <p>{name}</p>
          <Settings>
            <Toggle state={obj.appliance.boolean[index]} />
            <Gear />
          </Settings>
        </Appliance>
      );
    });
    return <>{controls}</>;
  });

  return (
    <Appliances>
      <h2>Applicances</h2>
      {appliances}
      {state.includes(null) && (
        <IconGrid selected={true}>
          <NewIcon />
        </IconGrid>
      )}
      {!state.includes(null) && (
        <AddControl>
          <Plus />
        </AddControl>
      )}
    </Appliances>
  );
};

export default ApplianceControls;
