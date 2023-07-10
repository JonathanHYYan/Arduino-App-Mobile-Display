import styled from "styled-components";

export const Day = styled.div`
    background: ${({active}) => active ? 'lightblue': 'none'};
`;