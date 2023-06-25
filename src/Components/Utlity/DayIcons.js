import { Day } from "./DayIconsStyles";

const DayIcons = ({days}) => {
    return(
        <>
            <Day active={days[0]}>Κ</Day>
            <Day active={days[1]}>Δ</Day>
            <Day active={days[2]}>Τρ</Day>
            <Day active={days[3]}>Τε</Day>
            <Day active={days[4]}>Πέ</Day>
            <Day active={days[5]}>Πα</Day>
            <Day active={days[6]}>Σ</Day>
        </>
    )
};

export default DayIcons;