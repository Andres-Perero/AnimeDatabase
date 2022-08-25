import styled, { keyframes } from "styled-components";

const spin = keyframes`
 0%{
    transform: rotate(0deg);   
 }
 100%{
    transform: rotate(360deg);
 }
`;

export const Spinner = styled.div`
border: 10px solid rgba(6, 255, 255, 0.672);
width: 70px;
height: 70px;
position: relative;
top: 30vh;
left:45%;

border-radius: 50%;
border-left-color:  rgba(235, 232, 233, 0.872);
animation: ${spin} 0.5s linear infinite;

`;
