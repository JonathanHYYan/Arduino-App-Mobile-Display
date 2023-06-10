import {
  AddControl,
  Appliance,
  Appliances,
  DefaultPage,
  Plus,
} from "./MainPageStyles";
import { data } from "../../Assets/data";
import Toggle from "../Utlity/Toggle";
import RoomIcons from "../Nav/RoomIcons";

const MainPage = () => {
  // A data set needs to be imported or fetched from firebase on what applicances is available
  // Based on the data the applicance icon should show in the nav and the options in controls
  // lighter shade of orange #F5B181

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
    <DefaultPage>
      <RoomIcons />
      <Appliances>
        <h2>Applicances</h2>
        {appliances}
        <AddControl>
          <Plus />
        </AddControl>
      </Appliances>
    </DefaultPage>
  );
};

export default MainPage;
