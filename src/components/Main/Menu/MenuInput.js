import React from "react";
import styled from "styled-components";

const Inputstyle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  label {
    font-weight: bold;
    margin-right: 1rem;
  }

  input {
    font: inhert;
    width: 3rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding-left: 0.5rem;
  }
`;

const MenuInput = React.forwardRef((props, ref) => {
  return (
    <Inputstyle>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </Inputstyle>
  );
});

export default MenuInput;
