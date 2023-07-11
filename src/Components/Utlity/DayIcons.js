import { useState } from "react";
import { Day } from "./DayIconsStyles";
import { useEffect } from "react";

const DayIcons = ({ days }) => {
  const [activeDays, setActiveDays] = useState(days);

  const updateDays = (index) => {
    const updateDays = activeDays.map((bool, i) => {
      if (index != null) {
        return i === index ? !activeDays[i] : activeDays[i];
      } else {
        return null;
      }
    });
    setActiveDays(updateDays);
  };

  return (
    <>
      <Day active={activeDays[0]} onClick={() => updateDays(0)}>
        Κ
      </Day>
      <Day active={activeDays[1]} onClick={() => updateDays(1)}>
        Δ
      </Day>
      <Day active={activeDays[2]} onClick={() => updateDays(2)}>
        Τρ
      </Day>
      <Day active={activeDays[3]} onClick={() => updateDays(3)}>
        Τε
      </Day>
      <Day active={activeDays[4]} onClick={() => updateDays(4)}>
        Πέ
      </Day>
      <Day active={activeDays[5]} onClick={() => updateDays(5)}>
        Πα
      </Day>
      <Day active={activeDays[6]} onClick={() => updateDays(6)}>
        Σ
      </Day>
    </>
  );
};

export default DayIcons;
