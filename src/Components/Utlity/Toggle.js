import { useState } from "react";
import { ToggleSwitch } from "./ToggleStyles";

const Toggle = ({ state }) => {
  const [checked, setChecked] = useState(state);

  return (
    <ToggleSwitch
      type="checkbox"
      checked={checked}
      onChange={() => setChecked(!checked)}
    />
  );
};

export default Toggle;
