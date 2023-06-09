import {
  AddIcon,
  AddControl,
  Bed,
  Appliance,
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
    return (
      <Icon key={obj.room}>
        {obj.room === "kitchen" ? (
          <Kitchen />
        ) : obj.room === "bed" ? (
          <Bed />
        ) : (
          ""
        )}
      </Icon>
    );
  });

  const appliances = data.map((obj) => {
    const controls = obj.appliance.names.map((names, index) => {
      return (
        <>
        <div>{names}</div>
        <div>{obj.appliance.boolean[index]}</div>
        </>
      );
    })
    return (
      <>
        <div>{controls}</div>
      </>
    );
  });

  return (
    <DefaultPage>
      <Rooms>
        {rooms}
        <AddIcon>
          <Plus />
        </AddIcon>
      </Rooms>
      <Appliance>
        <h2>Applicances</h2>
        {appliances}
        <AddControl>
          <Plus />
        </AddControl>
      </Appliance>
    </DefaultPage>
  );
};

export default MainPage;
