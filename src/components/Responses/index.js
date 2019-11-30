import React from "react";
import { StyledResponses } from "../../styled-components";

class Responses extends React.Component {
  render() {
    const { recent, handleRecent } = this.props;
    return (
      <StyledResponses
        style={{
          width: `${recent ? "30%" : "0"}`,
          padding: `${recent ? "14px" : "0"}`
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3 className="title">Recent Searches:</h3>
          <h6
            style={{ fontSize: "18px", cursor: "pointer" }}
            onClick={handleRecent}
          >
            &#10005;
          </h6>
        </div>
        <div className="messages">
          <h3>
            <span>Disease:</span> Something
          </h3>
          <div className="disease">
            <h4>Details</h4>
            <h6>Date: 12-06-2019</h6>
          </div>
        </div>
      </StyledResponses>
    );
  }
}

export default Responses;
