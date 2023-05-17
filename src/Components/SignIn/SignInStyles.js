import styled from "styled-components";
import logo from '../../Assets/logo.png'

export const AlertHeader = styled.header`
  background-color: #37c8a5;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Title = styled.h1`
  text-align: center;
  color: white;
  font-size: 1.2rem;
  width: 80%;
  font-family: sans-serif;
`;

export const AlertMain = styled.div`
    background-color: #9D9C9A;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    font-family: sans-serif;
`;

export const BackgorundLogo = styled.img`
position: absolute;
width: 8rem;
height 8rem;
top: 35%;
opacity: 0.4;
`;

export const Text = styled.p`
    margin-bottom: 1.5rem;
    color: white;
    width: 90%;
    z-index: 1;
`;

export const Password = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
`;

export const Input = styled.input`
 width: 60%;
`

export const SignButton = styled.div`
  cursor: pointer;
    background-color: #37c8a5;
    height: 20.5px;
    width: 5rem;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
`;