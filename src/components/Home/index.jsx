import React from "react";
import { Link } from "react-router-dom";
import Doc from "../../assests/doc.png";
import { StyledHome } from "../../styled-components";
import Login from "../Login";
import Register from "../Register";

class Home extends React.Component {
  state = {
    comp: false
  };

  handleComp = () => {
    this.setState(prevState => ({
      comp: !prevState.comp
    }));
  };

  render() {
    const { comp } = this.state;
    return (
      <StyledHome>
        <div className="image">
          <img src={Doc} alt="home pic" />
        </div>
        <div className="formComp">
          <h2 className="title">Disease Prediction</h2>
          {comp ? <Register /> : <Login handleComp={this.handleComp} />}
          <h5 className="changeComp">
            {comp ? "Already have an account? please" : ""}{" "}
            <Link to="#" onClick={this.handleComp}>
              {comp ? "Login" : ""}
            </Link>
          </h5>
        </div>
      </StyledHome>
    );
  }
}

export default Home;
