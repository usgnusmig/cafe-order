import React, { useRef, useReducer } from "react";
import { useState } from "react/cjs/react.development";
import styled from "styled-components";

const LoginStyle = styled.form`
  position: relative;
  text-align: center;
  max-width: 40rem;
  width: 100%;
  background-color: #fafafa;
  color: #333333;
  margin: auto;
  margin-top: -8rem;
  padding: 1rem;
  border-radius: 7px;
  box-shadow: 0 1px 10px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;

  button {
    border: 1px solid #005000;
    background: #005000;
    color: #ffffff;
    cursor: pointer;
    font-size: 1.25rem;
    border-radius: 15px;
    padding: 0.8rem 1rem;
    margin-right: 29.5rem;
    margin-left: 1rem;
  }
`;

const InputBox = styled.div`
  display: flex;
  margin: 1rem 0;
  align-items: stretch;
  flex-direction: row;

  label {
    font-weight: bold;
    flex: 1;
    color: #005000;
    padding: 0.35rem 0.35rem;
  }

  input {
    flex: 3;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 0.35rem 0.35rem;
  }
`;

const emailReducer = (state, action) => {
  if (action.type === "EMAIL") {
    return {
      value: action.val,
      isValid: action.val.includes("@"),
    };
  }
  return {
    value: "",
    isValid: false,
  };
};

const passwordReducer = (state, action) => {
  if (action.type === "PASSWORD") {
    return {
      value: action.val,
      isValid: action.val.trim().length > 7,
    };
  }
  return {
    value: "",
    isValid: false,
  };
};

const Login = (props) => {
  const emailRef = useRef();
  const passwordRef = useRef();

  let defaultValue = {
    value: "",
    isValid: false,
  };

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordRef, {
    value: "",
    isValid: false,
  });

  const emailChangeHandler = (event) => {
    let email = emailRef.current.value;

    if (email.includes("@") && email.includes(".")) {
    }
  };
  const passwordChangeHandler = (event) => {};

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(emailRef.current.value, passwordRef.current.value);
    // props.onLogin();
  };
  return (
    <LoginStyle onSubmit={submitHandler}>
      <InputBox>
        <label>E-Mail</label>
        <input ref={emailRef} id="email" />
      </InputBox>

      <InputBox>
        <label>Pssword</label>
        <input ref={passwordRef} id="password" />
      </InputBox>

      <button type="submit">로그인</button>
    </LoginStyle>
  );
};

export default Login;
