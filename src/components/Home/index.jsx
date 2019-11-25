import React from "react";
import Doc from "../../assests/doc.png";
import { StyledHome } from "../../styled-components";
import Login from "../Login";

class Home extends React.Component {
  render() {
    return (
      <StyledHome>
        <div className="image">
          <img src={Doc} alt="home pic" />
        </div>
        <div className="formComp">
          <h2 className="title">Disease Prediction</h2>
          <Login />
        </div>
      </StyledHome>
    );
  }
}

export default Home;
