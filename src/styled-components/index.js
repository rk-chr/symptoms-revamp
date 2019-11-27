import styled, { keyframes } from "styled-components";

const StyledHome = styled.div`
  /* background-color: whitesmoke; */
  display: flexbox;
  flex-direction: row;

  .image {
    width: 57%;
    height: 860px;
    text-align: center;
    padding-top: 180px;
    background-image: linear-gradient(
      to right top,
      #86757e,
      #92818f,
      #9c8ea1,
      #a49bb4,
      #a9aac7,
      #a5b0cd,
      #a1b7d2,
      #9ebdd6,
      #97bbcd,
      #93b9c4,
      #92b6ba,
      #93b3b1
    );
    clip-path: polygon(0 0, 100% 0, 85% 100%, 0% 100%);
  }

  .image img {
    width: 50%;
    height: auto;
  }

  .formComp {
    width: 43%;
    padding: 100px;
  }

  .formComp .title {
    text-align: center;
    letter-spacing: 0.2px;
    font-weight: 700;
    font-size: 25px;
  }

  .changeComp {
    text-align: center;
  }
`;

const StyledForm = styled.form`
  margin-top: 20px;
  label,
  input {
    display: flex;
    flex-direction: column;
  }
  label {
    font-size: 16px;
    letter-spacing: 0.3px;
    margin-top: 25px;
    margin-bottom: 4px;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  font-size: 17px;
  outline: none;
  letter-spacing: 0.3px;
  border: ${props => props.color || "1.5px solid lightgrey"};
  border-radius: 3px;
  padding: 10px;
  &:focus {
    border: ${props => props.color || "1.5px solid grey"};
  }
`;

const StyledButton = styled.button`
  width: 100%;
  padding: 12px;
  color: ${props => (props.disabled ? "black" : "white")};
  background-color: ${props => props.disabled && "#dddddd"};
  background-image: ${props =>
    !props.disabled &&
    `linear-gradient(
    to right top,
    #2a313b,
    #43545a,
    #647878,
    #8e9e95,
    #bec3b4
  )`};
  border-radius: 3px;
  font-size: 17px;
  font-weight: 600;
  letter-spacing: 0.5px;
  margin-top: 45px;
  box-shadow: 0px 1px 5px 0px rgba(102, 94, 102, 0.71);
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease-out;

  &:hover {
    background-image: linear-gradient(
      to right top,
      #a8442b,
      #bf5e27,
      #d27b1f,
      #df9a13,
      #e6bb0a
    );
    transform: translate(0px, -2px);
  }
`;

const StyledAlert = styled.div`
  padding: 15px;
  border-radius: 3px;
  margin-top: 18px;
  background-color: ${props => (props.error ? "#f8d7da" : "#d4edda")};
`;

const spin = keyframes`
 0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledLoader = styled.div`
  border: 6px solid lightgray;
  border-radius: 50%;
  border-top: 6px solid grey;
  width: 50px;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: ${spin} 2s linear infinite;
`;

export {
  StyledHome,
  StyledForm,
  StyledInput,
  StyledButton,
  StyledAlert,
  StyledLoader
};
