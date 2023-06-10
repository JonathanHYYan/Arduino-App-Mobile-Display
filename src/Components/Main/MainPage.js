import {
  DefaultPage,
} from "./MainPageStyles";
import RoomIcons from "../Rooms/RoomIcons";
import ApplianceControls from "../Appliance/ApplianceControls";

const MainPage = () => {
  // A data set needs to be imported or fetched from firebase on what applicances is available
  // Based on the data the applicance icon should show in the nav and the options in controls
  // lighter shade of orange #F5B181

  return (
    <DefaultPage>
      <RoomIcons />
      <ApplianceControls />
    </DefaultPage>
  );
};

export default MainPage;
