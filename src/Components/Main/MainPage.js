import {
  AddIcon,
  AddControl,
  Bed,
  Appliance,
  Appliances,
  DefaultPage,
  Icon,
  Kitchen,
  Rooms,
  Plus,
} from "./MainPageStyles";
import { data } from "../../Assets/data";
import Toggle from "../Utlity/Toggle";

const MainPage = () => {
  // A data set needs to be imported or fetched from firebase on what applicances is available
  // Based on the data the applicance icon should show in the nav and the options in controls
  // lighter shade of orange #F5B181

  const rooms = data.map((obj) => {
    const roomSelect =
      obj.room === "kitchen" ? <Kitchen /> : obj.room === "bed" ? <Bed /> : "";

    return <Icon key={obj.room}>{roomSelect}</Icon>;
  });

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
      <Rooms>
        {rooms}
        <AddIcon>
          <Plus />
        </AddIcon>
      </Rooms>
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
