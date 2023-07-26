import { useState } from "react";
import { ToggleSwitch } from "./ToggleStyles";

// Component renders a toggle button in pill shape
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
