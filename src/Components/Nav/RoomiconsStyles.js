import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";
import { FaBed, FaPlus } from "react-icons/fa";

export const Rooms = styled.div`
  box-sizing: border-box;
  padding: 1.2em 0;
  background-color: #4573c8;
  width: 35%;
  max-width: 6.5em;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Icon = styled.div`
  cursor: pointer;
  background-color: #d87b3f;
  height: 3.7em;
  width: 3.7em;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1em;
`;

export const Kitchen = styled(GiKnifeFork)`
  width: 3em;
  height: auto;
`;

export const Bed = styled(FaBed)`
  width: 3em;
  height: auto;
`;

export const AddIcon = styled.div`
  cursor: pointer;
  background-color: #9d9c9a;
  opacity: 0.75;
  height: 3.7em;
  width: 3.7em;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1em;
`;

export const Plus = styled(FaPlus)`
  width: auto;
  height: 80%;
  color: white;
`;
