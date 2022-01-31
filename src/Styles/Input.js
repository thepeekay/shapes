import styled from "styled-components";

const Input = styled.input`
  flex: 1 0;
  min-width: 50px;
  min-height: 25px;
  font-size: inherit;
  background-color: transparent;
  padding-left: 5px;
  border: 2px solid blue;
  &:focus {
    outline: none;
  }
`;

const Container = styled.div`
  font-family: 'Arial'; 
  align: center; 
  padding: 5px;
  border: 1px solid;
  border-radius: 5px;

`;

const Tab = styled.button`
  padding: 10px 30px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  border-bottom: 2px solid transparent;
  transition: ease border-bottom 250ms;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid black;
    opacity: 1;
  `}
`;

export {Input, Container, Tab};