import { useState } from "react";
import { ToggleSwitch } from "./ToggleStyles";

const Toggle = () => {
    const [checked, setChecked] = useState(false);

    return(
    <ToggleSwitch 
    type="checkbox"
    checked={checked}
    onChange={() => setChecked(!checked)}
    />
    )
};

export default Toggle;