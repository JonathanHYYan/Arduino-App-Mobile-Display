import { Kitchen, Bed, Icon, Plus, AddIcon } from "./RoomiconsStyles";
import { data } from "../../Assets/data";

const RoomIcons = () => {
    const rooms = data.map((obj) => {
        const roomSelect =
          obj.room === "kitchen" ? <Kitchen /> : obj.room === "bed" ? <Bed /> : "";
    
        return <Icon key={obj.room}>{roomSelect}</Icon>;
    });

    return(
        <>
        {rooms}
        <AddIcon>
            <Plus/>
        </AddIcon>
        </>
    )
};

export default RoomIcons;