import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: 50%;
  max-width: 500px;
  justify-content: center;
`;
export const FForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormInput = styled.input`
  margin: 10px;
  background: white;
  color: rgb(7 2 18);
  transition: all 200ms ease;
  border-left: 0 solid transparent;
  border: 0;
  width: 500px;
  height: 3.8rem;
  border-radius: 3px;
  box-shadow: 0 0 2rem rgb(0, 0, 0, 20%);
`;
export const FormTextArea = styled.textarea`
  margin: 10px;
  background: white;
  color: rgb(7 2 18);
  transition: all 200ms ease;
  border-left: 0 solid transparent;
  border: 0;
  height: 6.8rem;
  width: 500px;
  border-radius: 3px;
  box-shadow: 0 0 2rem rgb(0, 0, 0, 20%);
`;
export const Button = styled.button`
  display: flex;
  border-radius: 50px;
  height: 30px;
  background-color: #00bcd4;
  box-shadow: 0;
`;
