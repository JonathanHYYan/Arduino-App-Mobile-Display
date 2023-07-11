import styled from "styled-components";

export const Day = styled.div`
  text-align: center;
  padding: 1px;
  width: 1.4rem;
  cursor: pointer;
  background: ${({ active }) => (active ? "lightblue" : "none")};
`;
