import React from "react";
import { StyledDashboard, StyledHeader } from "../../styled-components";
import CommonSymptoms from "../CommonSymptoms";
import Symptoms from "../Symptoms";
import UserSelected from "../UserSelected";
import Responses from "../Responses";

class Dashboard extends React.Component {
  state = {
    click: false,
    recent: false
  };

  handleClick = () => {
    const { click } = this.state;
    this.setState({
      click: !click
    });
  };

  handleRecent = () => {
    const { recent } = this.state;
    this.setState({
      recent: !recent
    });
  };

  render() {
    const { click, recent } = this.state;
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
              <CommonSymptoms
                handleClick={this.handleClick}
                handleRecent={this.handleRecent}
              />
            </div>
          </div>
          <Symptoms click={click} />
          <Responses recent={recent} handleRecent={this.handleRecent} />
        </StyledDashboard>
      </>
    );
  }
}

export default Dashboard;
