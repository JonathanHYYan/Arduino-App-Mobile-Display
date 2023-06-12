import styled from "styled-components";
import { FaPlus } from "react-icons/fa";
import { BsFillGearFill } from "react-icons/bs";

export const Appliances = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Appliance = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  align-items: center;
`;

export const Plus = styled(FaPlus)`
  width: auto;
  height: 80%;
  color: white;
`;

export const AddControl = styled.div`
  cursor: pointer;
  background-color: #9d9c9a;
  opacity: 0.65;
  height: 2em;
  width: 80%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1em;
`;

export const Settings = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
`;

export const Gear = styled(BsFillGearFill)`
  color: grey;
`;