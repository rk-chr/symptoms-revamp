import React from "react";
import {
  StyledForm,
  StyledButton,
  StyledAlert,
  StyledLoader
} from "../../styled-components";
import Input from "../InputBox";
import {
  validateName,
  validateEmail,
  validatePassword
} from "../../validations";

const initialState = {
  name: "",
  nameError: false,
  nameErrorMessage: "",
  email: "",
  emailError: false,
  emailErrorMessage: "",
  password: "",
  passwordError: false,
  passwordErrorMessage: ""
};

class Register extends React.Component {
  state = {
    ...initialState,
    register: {
      loading: false,
      loaded: false,
      error: false
    }
  };

  handleChange = e => {
    const { name, value } = e.target;
    if (name === "email") {
      const checkError = validateEmail(value);
      this.setState({
        email: value,
        emailError: checkError.error,
        emailErrorMessage: checkError.error ? checkError.errorMessage : ""
      });
    } else if (name === "name") {
      const checkError = validateName(value);
      this.setState({
        name: value,
        nameError: checkError.error,
        nameErrorMessage: checkError.error ? checkError.errorMessage : ""
      });
    } else if (name === "password") {
      const checkError = validatePassword(value);
      this.setState({
        password: value,
        passwordError: checkError.error,
        passwordErrorMessage: checkError.error ? checkError.errorMessage : ""
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, email, password } = this.state;
    if (name && email && password) {
      this.setState({ register: { loading: true, error: false } });
      if (localStorage.getItem("user")) {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user.filter(ele => ele.email === email).length === 0) {
          localStorage.setItem(
            "user",
            JSON.stringify([...user, { name, email, password }])
          );
          setTimeout(() => {
            this.setState({ register: { loading: false, loaded: true } });
          }, 600);
        } else {
          setTimeout(() => {
            this.setState({
              register: { loading: false, error: "Email already exists!" }
            });
          }, 600);
        }
      } else {
        localStorage.setItem(
          "user",
          JSON.stringify([{ name, email, password }])
        );
        setTimeout(() => {
          this.setState({ register: { loading: false, loaded: true } });
        }, 600);
      }
    }
  };

  render() {
    const {
      name,
      email,
      password,
      nameError,
      nameErrorMessage,
      emailError,
      emailErrorMessage,
      passwordError,
      passwordErrorMessage,
      register
    } = this.state;
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <Input
          label="Name"
          name="name"
          type="text"
          value={name}
          placeholder="Enter your name"
          change={this.handleChange}
          error={nameError}
          errorMessage={nameErrorMessage}
        />
        <Input
          label="Email"
          name="email"
          type="text"
          value={email}
          placeholder="Enter your email"
          change={this.handleChange}
          error={emailError}
          errorMessage={emailErrorMessage}
        />
        <Input
          label="Password"
          name="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          error={passwordError}
          change={this.handleChange}
          errorMessage={passwordErrorMessage}
        />
        {register.loading && (
          <StyledLoader
            style={{ marginTop: "25px", width: "35px", height: "35px" }}
          ></StyledLoader>
        )}
        {!register.loading && <StyledButton>Register</StyledButton>}
        {(register.loaded || register.error) && (
          <StyledAlert error={!!register.error}>
            {register.error
              ? register.error
              : register.loaded
              ? "Thanks for registering! You can login now."
              : ""}
          </StyledAlert>
        )}
      </StyledForm>
    );
  }
}

export default Register;
