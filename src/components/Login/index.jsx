import React from "react";
import { withRouter } from "react-router-dom";
import { StyledForm, StyledButton, StyledAlert } from "../../styled-components";
import Input from "../InputBox";
import { validateEmail, validatePassword } from "../../validations";

const initialState = {
  email: "",
  emailError: false,
  emailErrorMessage: "",
  password: "",
  passwordError: false,
  passwordErrorMessage: ""
};

class Login extends React.Component {
  state = {
    ...initialState,
    login: {
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
    const { email, password } = this.state;
    const { history } = this.props;
    if (email && password) {
      this.setState({ login: { loading: true, error: false } });
      if (localStorage.getItem("user")) {
        const user = JSON.parse(localStorage.getItem("user")).filter(
          ele => ele.email === email
        );
        if (user.length > 0) {
          if (user[0].password === password) {
            if (localStorage.getItem("logout")) {
              localStorage.setItem("logout", "false");
            }
            return setTimeout(() => {
              this.setState({ login: { loading: false, loaded: true } });
              return history.push("/chat-box");
            }, 600);
          } else {
            return setTimeout(
              () =>
                this.setState({
                  login: { loading: false, error: "Password is wrong!" }
                }),
              600
            );
          }
        } else {
          // user not found
          return setTimeout(
            () =>
              this.setState({
                login: { loading: false, error: "User not found!" }
              }),
            600
          );
        }
      } else {
        // user not found
        setTimeout(
          () =>
            this.setState({
              login: { loading: false, error: "User not found!" }
            }),
          600
        );
      }
    }
  };
  render() {
    const {
      email,
      emailError,
      emailErrorMessage,
      password,
      passwordError,
      passwordErrorMessage,
      login
    } = this.state;
    return (
      <StyledForm onSubmit={this.handleSubmit}>
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
        <StyledButton disabled={login.loading}>
          {login.loading ? "Loading.." : "Login"}
        </StyledButton>
        {login.error && (
          <StyledAlert error={!!login.error}>
            {login.error && login.error}
          </StyledAlert>
        )}
      </StyledForm>
    );
  }
}

export default withRouter(Login);
