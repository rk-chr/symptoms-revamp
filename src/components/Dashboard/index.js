import React from "react";
import { StyledDashboard, StyledHeader } from "../../styled-components";
import CommonSymptoms from "../CommonSymptoms";
import Symptoms from "../Symptoms";
import UserSelected from "../UserSelected";

class Dashboard extends React.Component {
  state = {
    click: false
  };

  handleClick = () => {
    const { click } = this.state;
    this.setState({
      click: !click
    });
  };

  render() {
    const { click } = this.state;
    return (
      <>
        <StyledHeader>
          <h4 className="title">Disease Prediction Dashboard</h4>
        </StyledHeader>
        <StyledDashboard>
          <div
            className="selected"
            style={{ width: `${click ? "68%" : "100%"}` }}
          >
            <UserSelected />
            <div className="common">
              <CommonSymptoms />
            </div>
          </div>
          <Symptoms click={click} />
        </StyledDashboard>
      </>
    );
  }
}

export default Dashboard;
