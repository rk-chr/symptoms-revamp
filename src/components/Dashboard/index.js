import React from "react";
import { StyledDashboard, StyledHeader } from "../../styled-components";

class Dashboard extends React.Component {
  render() {
    return (
      <>
        <StyledHeader>
          <h4 className="title">Disease Prediction Dashboard</h4>
        </StyledHeader>
        <StyledDashboard>
          <div className="selected">
            <div className="chat">
              <div className="items">
                <h4>Your symptoms: </h4>
                <ul>
                  <li>Symptoms</li>
                  <li>Symptoms</li>
                  <li>Symptoms</li>
                  <li>Symptoms</li>
                  <li>Symptoms</li>
                </ul>
              </div>
              <div className="input">
                <input type="text" placeholder="search for symptoms.." />
              </div>
            </div>
            <div className="common">
              <h1>kishore</h1>
            </div>
          </div>
          <div className="symptoms">
            <h2>RAMA</h2>
          </div>
        </StyledDashboard>
      </>
    );
  }
}

export default Dashboard;
