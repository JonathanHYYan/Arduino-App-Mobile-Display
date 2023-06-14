import { Grid, GridIcon } from "./IconGridStyles";
import { Bed, Kitchen } from "../Rooms/RoomiconsStyles";

const NewIcon = () => {
  const addRoom = () => {
    console.log("Room added");
  };

  const RoomIcons = [
    <GridIcon selected={false} onClick={addRoom}>
      <Kitchen />
    </GridIcon>,
    <GridIcon selected={false} onClick={addRoom}>
      <Bed />
    </GridIcon>,
    <GridIcon selected={false} onClick={addRoom}>
      <Bed />
    </GridIcon>,
    <GridIcon selected={false} onClick={addRoom}>
      <Bed />
    </GridIcon>,
    <GridIcon selected={false} onClick={addRoom}>
      <Bed />
    </GridIcon>,
    <GridIcon selected={false} onClick={addRoom}>
      <Bed />
    </GridIcon>,
    <GridIcon selected={false} onClick={addRoom}>
      <Bed />
    </GridIcon>,
    <GridIcon selected={false} onClick={addRoom}>
      <Bed />
    </GridIcon>,
    <GridIcon selected={false} onClick={addRoom}>
      <Bed />
    </GridIcon>,
  ];
  return (
    <>
    <h3>Select Icon For New Room: </h3>
      <Grid>{RoomIcons}</Grid>
    </>
  );
};

export default NewIcon;
