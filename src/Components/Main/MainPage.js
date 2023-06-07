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

const MainPage = () => {
  // A data set needs to be imported or fetched from firebase on what applicances is available
  // Based on the data the applicance icon should show in the nav and the options in controls
  // lighter shade of orange #F5B181

  return (
    <DefaultPage>
      <Nav>
        <Icon>
          <Kitchen />
        </Icon>
        <Icon>
          <Bed />
        </Icon>
        <AddIcon>
          <Plus />
        </AddIcon>
      </Nav>
      <Controls></Controls>
    </DefaultPage>
  );
};

export default MainPage;
