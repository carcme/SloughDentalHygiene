import React from "react";
import styled from "styled-components";

const MyButton = (props) => {
  return <Button onClick={props.onClick}>Send email</Button>;
};

export default MyButton;

const Button = styled.button`
  background: linear-gradient(91.4deg, #2fb8ff 0%, #9eecd9 100%);
  padding: 12px 0;
  width: 200px;
  border: none;
  border-radius: 30px;
  color: white;
  font-weight: bold;
  font-family: Segoe UI, sans-serif;
  display: grid;
  justify-self: center;
`;
