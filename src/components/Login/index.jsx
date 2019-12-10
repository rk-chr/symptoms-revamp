import React from "react";
import { withRouter, Link } from "react-router-dom";
import { StyledForm, StyledButton, StyledAlert } from "../../styled-components";
import Input from "../InputBox";
import { validateEmail, validatePassword } from "../../validations";
import ChatBox from "../ChatBox";

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
    name: "",
    showPassword: false,
    login: {
      loading: false,
      loaded: false,
      error: false
    }
  };

  handleShowpassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword
    }));
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
    const { email, password, emailError, passwordError } = this.state;
    if (email && password && !emailError && !passwordError) {
      this.setState({ login: { loading: true, error: false } });
      if (localStorage.getItem("user")) {
        const user = JSON.parse(localStorage.getItem("user")).filter(
          ele => ele.email === email
        );
        if (user.length > 0) {
          if (user[0].password === password) {
            localStorage.setItem("logout", "false");
            return setTimeout(() => {
              this.setState({
                name: user[0].name,
                login: { loading: false, loaded: true }
              });
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

  handleState = () => {
    return new Promise(resolve =>
      resolve(
        setTimeout(
          () =>
            this.setState({
              login: {
                loading: false,
                loaded: false,
                error: false
              }
            }),
          1600
        )
      )
    );
  };

  render() {
    const {
      name,
      email,
      emailError,
      emailErrorMessage,
      password,
      passwordError,
      passwordErrorMessage,
      login,
      showPassword
    } = this.state;
    const { handleComp } = this.props;

    if (login.loaded) {
      return <ChatBox name={name} handleState={this.handleState} />;
    }

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
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          value={password}
          error={passwordError}
          change={this.handleChange}
          errorMessage={passwordErrorMessage}
        />
        <span
          onClick={this.handleShowpassword}
          style={{ position: "relative", left: "394px", top: "-30px" }}
        >
          <i class="fa fa-eye" aria-hidden="true"></i>
        </span>
        <StyledButton disabled={login.loading}>
          {login.loading ? "Loading.." : "Login"}
        </StyledButton>
        {login.error && (
          <StyledAlert error={!!login.error}>
            {login.error && login.error}
          </StyledAlert>
        )}
        {!login.loaded && (
          <h5 className="changeComp">
            Don't have an account? please{" "}
            <Link to="#" onClick={handleComp}>
              create an account
            </Link>
          </h5>
        )}
      </StyledForm>
    );
  }
}

export default withRouter(Login);
