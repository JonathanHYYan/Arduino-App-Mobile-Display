import { useState } from "react";
import { MobileTemplate } from "./PhoneModelStyles";



const PhoneModel = () => {
const phoneList = [
    { name: "iPhone 12", height: 146.7, width: 71.5 },
    { name: "Pixel 5", height: 144.7, width: 70.4 },
    ];
  const [selectedPhone, setSelectedPhone] = useState(0);

  const handleChange = (e) => {
    setSelectedPhone(e.target.value);
    console.log(e.target.value);
  };

  const phoneOptions = phoneList.map((phone, index) => {
    return (
      <option key={phone.name} value={index}>
        {phone.name}
      </option>
    );
  });

  const phoneStyle = {
    width: phoneList[selectedPhone].width*4,
    height: phoneList[selectedPhone].height*4,
  };


  return (
    <>
    <MobileTemplate style={phoneStyle}>
    </MobileTemplate>
    <select value={selectedPhone} onChange={handleChange}>
        {phoneOptions}
    </select>
    </>
  );
};

export default PhoneModel;
