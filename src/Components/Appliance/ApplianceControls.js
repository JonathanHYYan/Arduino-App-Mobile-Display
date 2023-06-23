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
import NewIcon from "./NewIcon";
import { useState } from "react";
import { useEffect } from "react";

const ApplianceControls = ({ state, newRooms }) => {
  const [dataState, setDataState] = useState(data);

  // useEffect(() => {
  //   console.log(dataState);
  // }, [dataState]);

  const appliances = dataState.map((obj) => {
    const controls = obj.appliance.names.map((name, index) => {
      return (
        <Appliance key={index} selected={state[index]}>
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

  const updateRooms = (room) => {
    newRooms(room);
  };

  return (
    <Appliances>
      <h2>Applicances</h2>
      {appliances}
      {state.includes(null) && (
        <IconGrid selected={true}>
          <NewIcon updateRooms={updateRooms} />
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
