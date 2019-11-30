import React from "react";

class UserSelected extends React.Component {
  render() {
    return (
      <div className="chat">
        <div className="items">
          <h4>Your symptoms: </h4>
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
        <div className="input">
          <input type="text" placeholder="search for symptoms.." />
        </div>
      </div>
    );
  }
}

export default UserSelected;
