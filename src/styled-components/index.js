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

const StyledDashboard = styled.div`
  background-color: whitesmoke;

  .selected {
    /* width: 68%; */
    transition: width 0.3s ease-in-out;
    float: left;
    padding: 10px;
    display: flex;
    flex-direction: row;
  }

  .selected .chat {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 40%;
    border-radius: 3px;
    background-color: white;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
      0 3px 1px -2px rgba(0, 0, 0, 0.2);
    height: 600px;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  .selected .chat .items {
    padding: 16px;
    margin: 0.25rem;
    background: ghostwhite;
  }

  .selected .chat .items .btn {
    margin-top: 30px;
    float: right;
    padding: 5px 12px;
    width: 30%;
    text-align: center;
    border-radius: 4px;
    color: white;
    -webkit-letter-spacing: 1px;
    -moz-letter-spacing: 1px;
    -ms-letter-spacing: 1px;
    letter-spacing: 1px;
    font-size: 15px;
    cursor: pointer;
    background-image: linear-gradient(
      to left bottom,
      #e986a9,
      #dc8ab2,
      #ce8eb9,
      #c092bd,
      #b395bd
    );
  }

  .selected .chat .items .btn:hover {
    background-image: linear-gradient(
      to right top,
      #34a2b2,
      #57aa9e,
      #7eaf8d,
      #a3b186,
      #c2b28c
    );
  }

  .selected .chat .items p {
    display: inline-block;
    margin: 2px 3px;
    background-image: linear-gradient(
      to left bottom,
      #71be33,
      #5db247,
      #4ea654,
      #44995e,
      #418c63
    );
    /* background-image: linear-gradient(to right top, #34a2b2, #57aa9e, #7eaf8d, #a3b186, #c2b28c); */
    color: white;
    padding: 3px 12px;
    border-radius: 4px;
    font-weight: 600;
    letter-spacing: 0.5px;
  }

  .selected .chat .items .delete {
    position: relative;
    top: -13px;
    left: 14px;
    color: red;
    visibility: hidden;
  }

  .selected .chat .input {
    background-color: white;
    padding: 30px 8px 8px 8px;
  }

  .selected .chat .input .searchResults {
    position: absolute;
    margin-top: 12px;
    width: 38%;
    border-radius: 5px;
    background-color: lightgray;
    max-height: 120px;
    overflow: scroll;
  }

  .selected .chat .input .searchResults h6 {
    padding: 5px;
    font-size: 14px;
    letter-spacing: 1px;
    cursor: pointer;
    width: 100%;
  }

  .selected .chat .input .searchResults h6:hover {
    background-color: orange;
    color: white;
  }

  .selected .chat .items p:hover {
    background-image: linear-gradient(
      to left bottom,
      #be8f33,
      #ba842b,
      #b57823,
      #b16d1c,
      #ac6116
    );
    cursor: pointer;
  }

  .selected .chat .items p:hover .delete {
    visibility: visible;
  }

  .selected .chat .input input {
    padding: 8px;
    font-size: 16px;
    width: 100%;
    border: none;
    border-bottom: 3px solid gold;
    outline: none;
  }

  .selected .chat .input input::placeholder {
    letter-spacing: 0.4px;
  }

  .selected .common {
    width: 60%;
    margin-left: 12px;
  }

  .selected .common .title {
    letter-spacing: 1.4px;
  }

  .selected .common .Cdisease {
    margin-top: 20px;
  }

  .selected .common .Cdisease p {
    display: inline-block;
    margin: 4px 8px;
    color: white;
    padding: 3px 12px;
    border-radius: 4px;
    font-weight: 600;
    letter-spacing: 0.5px;
    background-image: linear-gradient(
      to right top,
      #34a2b2,
      #57aa9e,
      #7eaf8d,
      #a3b186,
      #c2b28c
    );
  }

  .selected .common .Cdisease p:hover {
    background-image: linear-gradient(
      to left bottom,
      #be3360,
      #c13b4c,
      #be4739,
      #b75427,
      #ac6116
    );
    cursor: pointer;
  }

  .selected .common .bsymp {
    background-color: orange;
    color: ghostwhite;
    padding: 2px 12px;
    border-radius: 4px;
    cursor: pointer;
  }

  .selected .common .bsymp:hover {
    background-color: goldenrod;
  }

  .symptoms {
    transition: width 0.3s ease-in-out;
    float: right;
    box-shadow: -2px 0px 26px 1px rgba(0, 0, 0, 0.16);
    background-color: whitesmoke;
    /* padding: 10px; */
  }

  .symptoms .title {
    letter-spacing: 1.4px;
    color: black;
  }

  .symptoms .chunks {
    max-height: 700px;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  .symptoms .chunks p {
    display: inline-block;
    background-image: linear-gradient(
      to left bottom,
      #be3360,
      #c13b4c,
      #be4739,
      #b75427,
      #ac6116
    );
    color: white;
    margin: 6px 5px;
    padding: 3px 12px;
    border-radius: 25px;
    cursor: pointer;
    font-weight: 600;
    letter-spacing: 0.4px;
  }

  .symptoms .chunks p:hover {
    background-image: linear-gradient(
      to left bottom,
      #d5b9c2,
      #c5abac,
      #b29d99,
      #9f9089,
      #8b837b
    );
  }
`;

const StyledHeader = styled.div`
  background-color: violet;
  padding: 20px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
  background-color: mediumseagreen;

  .title {
    font-size: 22px;
    letter-spacing: 1.8px;
    color: black;
    background-color: white;
    width: 370px;
    text-align: center;
    border-radius: 3px;
  }
`;

const StyledResponses = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  background-color: white;
  box-shadow: -2px 0px 55px 1px rgba(0, 0, 0, 0.16);
  height: 820px;
  overflow-x: hidden;
  overflow-y: scroll;
  z-index: 99;
  transition: width 0.3s ease-out;

  .title {
    letter-spacing: 1.2px;
    color: black;
  }

  .messages {
    box-shadow: -2px -17px 69px 1px rgba(0, 0, 0, 0.16);
    background-color: white;
    border-radius: 5px;
    padding: 10px;
    margin-top: 12px;
    margin-bottom: 14px;
  }

  .messages h3 {
    letter-spacing: 0.4px;
    font-weight: 500;
  }

  .messages h3 span {
    color: chocolate;
  }

  .messages .disease {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
  }

  .messages .disease h4 {
    background-image: linear-gradient(
      to left bottom,
      #e986a9,
      #dc8ab2,
      #ce8eb9,
      #c092bd,
      #b395bd
    );
    color: white;
    padding: 3px 12px;
    border-radius: 5px;
    cursor: pointer;
    letter-spacing: 0.7px;
  }

  .messages .disease h6 {
    position: relative;
    top: 10px;
    letter-spacing: 0.5px;
    right: 12px;
  }
`;

const StyledModal = styled.div`
  display: ${props => (props.show ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);

  .modal-main {
    position: fixed;
    background: white;
    width: 45%;
    height: auto;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px;
    padding: 14px;
  }

  .close {
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
      0 3px 1px -2px rgba(0, 0, 0, 0.2);
    background-color: white;
    position: relative;
    float: right;
    width: 5%;
    text-align: center;
    border-radius: 50px;
    padding: 2px;
    top: -125px;
    left: 25px;
    cursor: pointer;
  }

  .close:hover {
    background-color: red;
    color: white;
  }
`;

export {
  StyledHome,
  StyledForm,
  StyledInput,
  StyledButton,
  StyledAlert,
  StyledLoader,
  StyledDashboard,
  StyledHeader,
  StyledResponses,
  StyledModal
};
