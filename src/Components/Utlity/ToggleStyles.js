import styled from "styled-components";

export const ToggleSwitch = styled.input`
  position: relative;
  appearance: none;
  width: 3em;
  height: 1.4em;
  background: #ccc;
  border-radius: 50px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: 0.4s;

  &:checked {
    background: #7da6ff;

    &:after {
      left: 60%;
    }
  }

  &:after {
    position: absolute;
    content: "";
    width: 1em;
    height: 1em;
    top: 12%;
    left: 5%;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    transform: scale(1.1);
    transition: 0.4s;
  }
`;
