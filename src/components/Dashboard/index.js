import React from "react";
import { StyledDashboard, StyledHeader } from "../../styled-components";
import CommonSymptoms from "../CommonSymptoms";
import Symptoms from "../Symptoms";
import UserSelected from "../UserSelected";
import Responses from "../Responses";

class Dashboard extends React.Component {
  state = {
    click: false,
    recent: false,
    selectedSymptoms: []
  };

  handleClick = () => {
    const { click } = this.state;
    this.setState({
      click: !click
    });
  };

  handleSymClear = () => {
    this.setState({
      selectedSymptoms: []
    });
  };

  handleRecent = () => {
    const { recent } = this.state;
    this.setState({
      recent: !recent
    });
  };

  handleSave = sym => () => {
    const { selectedSymptoms } = this.state;
    const checkSymptoms = selectedSymptoms.filter(ele => ele === sym);
    this.setState({
      selectedSymptoms:
        checkSymptoms.length > 0 ? selectedSymptoms : [...selectedSymptoms, sym]
    });
  };

  handleDelete = sym => () => {
    const { selectedSymptoms } = this.state;
    const newSelectedSymptoms = selectedSymptoms.filter(ele => ele !== sym);
    this.setState({
      selectedSymptoms: newSelectedSymptoms
    });
  };

  render() {
    const { click, recent, selectedSymptoms } = this.state;
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
            <UserSelected
              handleDelete={this.handleDelete}
              symptoms={selectedSymptoms}
              handleSave={this.handleSave}
              handleSymClear={this.handleSymClear}
            />
            <div className="common">
              <CommonSymptoms
                handleClick={this.handleClick}
                handleRecent={this.handleRecent}
                handleSave={this.handleSave}
              />
            </div>
          </div>
          <Symptoms click={click} handleSave={this.handleSave} />
          <Responses recent={recent} handleRecent={this.handleRecent} />
        </StyledDashboard>
      </>
    );
  }
}

export default Dashboard;
