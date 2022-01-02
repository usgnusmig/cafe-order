import React, { useRef } from "react";
import styled from "styled-components";

const FormStyle = styled.div`
  width: 90%;
  max-width: 40rem;
  margin: 2rem auto;
  padding: 2rem;
`;

const LoginInput = (props) => {
  const iputRef = useRef();
  return (
    <FormStyle>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={iputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </FormStyle>
  );
};

export default LoginInput;
