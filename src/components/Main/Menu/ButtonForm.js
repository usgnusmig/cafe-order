import React, { useRef } from "react";
import styled from "styled-components";
import MenuInput from "./MenuInput";

const FormStyle = styled.form`
  text-align: right;

  button {
    cursor: pointer;
    font: inhert;
    font-weight: bold;
    background-color: #005000;
    padding: 0.3rem 1.5rem;
    border: 1px; solid #005000;
    border-radius: 8px;
    color: white;

    &:hover, &:active {
      background-color: #004606;
      border-color: #004606;
    }
  }
`;

const ButtonForm = (props) => {
  const inputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = inputRef.current.value;

    console.log(enteredAmount);
  };

  // const [isAmount, setIsAmount] = useState[true]
  return (
    <FormStyle onSubmit={submitHandler}>
      <MenuInput
        ref={inputRef}
        label="수량"
        input={{
          id: `amount_${props.id}`,
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
        }}
      />
      <button>장바구니 담기</button>
    </FormStyle>
  );
};

export default ButtonForm;
