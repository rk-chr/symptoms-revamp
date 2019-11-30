import React from "react";
import { symptoms } from "../../data";

class Symptoms extends React.Component {
  render() {
    const { click, handleSave } = this.props;
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
            {symptoms.map((ele, i) => (
              <p key={i} onClick={handleSave(ele)}>
                {ele}
              </p>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Symptoms;
