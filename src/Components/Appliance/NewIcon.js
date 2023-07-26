import { Grid, GridIcon } from "./NewIconstyles";
import { Bed, Kitchen } from "../Rooms/RoomiconsStyles";

//  Component renders a list of icons selectable to represent the new room being created
const NewIcon = ({updateRooms}) => {
  const newRooms = (room) => {
    updateRooms(room);
  }

  const RoomIcons = [
    <GridIcon key="kitchen1" selected={false} onClick={() => newRooms("kitchen")}>
      <Kitchen />
    </GridIcon>,
    <GridIcon key="bed2" selected={false} onClick={() => newRooms('bed')}>
      <Bed />
    </GridIcon>,
    <GridIcon key="bed3" selected={false} onClick={() => newRooms("bed")}>
      <Bed />
    </GridIcon>,
    <GridIcon key="bed4" selected={false} onClick={() => newRooms("bed")}>
      <Bed />
    </GridIcon>,
    <GridIcon key="bed5" selected={false} onClick={() => newRooms("bed")}>
      <Bed />
    </GridIcon>,
    <GridIcon key="bed6" selected={false} onClick={() => newRooms("bed")}>
      <Bed />
    </GridIcon>,
    <GridIcon key="bed7" selected={false} onClick={() => newRooms("bed")}>
      <Bed />
    </GridIcon>,
    <GridIcon key="bed8" selected={false} onClick={() => newRooms("bed")}>
      <Bed />
    </GridIcon>,
    <GridIcon key="bed9" selected={false} onClick={() => newRooms("bed")}>
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
