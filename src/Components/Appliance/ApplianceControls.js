import { Appliances, Appliance, AddControl, Plus } from "./ApplianceControlsStyles";
import { data } from "../../Assets/data";
import Toggle from "../Utlity/Toggle";

const ApplianceControls = () => {
  const appliances = data.map((obj) => {
    const controls = obj.appliance.names.map((name, index) => {
      return (
        <Appliance key={name}>
          <p>{name}</p>
          <Toggle state={obj.appliance.boolean[index]} />
        </Appliance>
      );
    });
    return <>{controls}</>;
  });

  return (
    <Appliances>
      <h2>Applicances</h2>
      {appliances}
      <AddControl>
        <Plus />
      </AddControl>
    </Appliances>
  );
};

export default ApplianceControls;
