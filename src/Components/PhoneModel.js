import { useState } from "react";
import { MobileTemplate } from "./PhoneModelStyles";
import SignIn from "./SignIn/SignIn";
import MainPage from "./Main/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewAppliance from "./NewAppliance/NewAppliance";

// Component displays a sign page
const Template = () => {
  // List of phone models with their xy dimensions in mm
  const phoneList = [
    { name: "iPhone 12", height: 146.7, width: 71.5 },
    { name: "Pixel 5", height: 144.7, width: 70.4 },
    { name: "Samsung Galaxy Note II", height: 151.1, width: 80.5 },
  ];

  // Renders first phone model in list on load
  const [selectedPhone, setSelectedPhone] = useState(0);

  // State change on phone model selection
  const handleChange = (e) => {
    setSelectedPhone(e.target.value);
  };

  // Map out list of phone models to a drop down options tag
  const phoneOptions = phoneList.map((phone, index) => {
    return (
      <option key={phone.name} value={index}>
        {phone.name}
      </option>
    );
  });

  // Scales phone dimensions mm into practical display size
  const phoneStyle = {
    width: phoneList[selectedPhone].width * 4,
    height: phoneList[selectedPhone].height * 4,
  };

  return (
    <>
      <MobileTemplate style={phoneStyle}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/NewAppliance" element={<NewAppliance/>}/>
          </Routes>
        </BrowserRouter>
      </MobileTemplate>
      <select value={selectedPhone} onChange={handleChange}>
        {phoneOptions}
      </select>
    </>
  );
};

export default Template;
