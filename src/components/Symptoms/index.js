import React from "react";

class Symptoms extends React.Component {
  render() {
    const { click } = this.props;
    return (
      <>
        <div
          className="symptoms"
          style={{
            width: `${click ? "32%" : "0"}`,
            padding: `${click ? "10px" : "0"}`
          }}
        >
          <h3 className="title">Symptoms:</h3>
          <div className="chunks">
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
        </div>
      </>
    );
  }
}

export default Symptoms;
