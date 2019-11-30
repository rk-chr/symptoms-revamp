import React from "react";

class CommonSymptoms extends React.Component {
  render() {
    return (
      <>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3 className="title">Common Symptoms:</h3>
          <div style={{ display: "flex" }}>
            <h3
              className="bsymp"
              onClick={this.handleClick}
              style={{ marginRight: "6px" }}
            >
              Symptoms
            </h3>
            <h3
              className="bsymp"
              onClick={this.onLogout}
              style={{
                backgroundColor: "lightgray",
                color: "black",
                fontWeight: "500"
              }}
            >
              Logout
            </h3>
          </div>
        </div>
        <div className="Cdisease">
          <p>Symptoms</p>
          <p>Symptoms</p>
          <p>Symptoms</p>
          <p>Symptoms</p>
          <p>Symptoms</p>
          <p>Symptoms</p>
          <p>Symptoms</p>
          <p>Symptoms</p>
          <p>Symptoms</p>
        </div>
      </>
    );
  }
}

export default CommonSymptoms;
