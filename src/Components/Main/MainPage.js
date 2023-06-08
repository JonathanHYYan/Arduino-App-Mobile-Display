import {
  AddIcon,
  Bed,
  Controls,
  DefaultPage,
  Icon,
  Kitchen,
  Nav,
  Plus,
} from "./MainPageStyles";
import { data } from "../../Assets/data";
import Toggle from "../Utlity/Toggle";

const MainPage = () => {
  // A data set needs to be imported or fetched from firebase on what applicances is available
  // Based on the data the applicance icon should show in the nav and the options in controls
  // lighter shade of orange #F5B181

  const icons = data.map((obj) => {
    return (
      <Icon key={obj.icon}>
        {obj.icon === "kitchen" ? (
          <Kitchen />
        ) : obj.icon === "bed" ? (
          <Bed />
        ) : (
          ""
        )}
      </Icon>
    );
  });

  return (
    <DefaultPage>
      <Nav>
        {icons}
        <AddIcon>
          <Plus />
        </AddIcon>
      </Nav>
      <Controls><Toggle/></Controls>
    </DefaultPage>
  );
};

export default MainPage;
