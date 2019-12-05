import React from "react";
import { withRouter } from "react-router-dom";
import { commonSymptoms } from "../../data";

class CommonSymptoms extends React.Component {
  state = {
    loading: false
  };

  onLogout = () => {
    this.setState({ loading: true });
    const { history } = this.props;
    localStorage.setItem("logout", "true");
    setTimeout(() => {
      this.setState({ loading: false });
      history.push("/");
    }, 600);
  };

  render() {
    const { handleClick, handleRecent, handleSave, loading } = this.props;
    return (
      <>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3 className="title">Common Symptoms:</h3>
          <div style={{ display: "flex" }}>
            <h3
              className="bsymp"
              onClick={handleRecent}
              style={{ marginRight: "6px" }}
            >
              Recent
            </h3>
            <h3
              className="bsymp"
              onClick={handleClick}
              style={{ marginRight: "6px" }}
            >
              More Symptoms
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
              {loading ? "loading.." : "Logout"}
            </h3>
          </div>
        </div>
        <div className="Cdisease">
          {commonSymptoms.map((ele, i) => (
            <p key={i} onClick={handleSave(ele)}>
              {ele}
            </p>
          ))}
        </div>
      </>
    );
  }
}

export default withRouter(CommonSymptoms);
