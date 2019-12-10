import React from "react";
import { StyledResponses } from "../../styled-components";
import Modal from "../Modal";

class Responses extends React.Component {
  state = {
    feedBackData: [],
    modalDet: false,
    modalData: {}
  };

  componentDidMount() {
    if (localStorage.getItem("feedback")) {
      const feedBackData = JSON.parse(localStorage.getItem("feedback"));
      this.setState({
        feedBackData
      });
    }
  }

  handleDelete = data => () => {
    if (localStorage.getItem("feedback")) {
      const feedBackData = JSON.parse(localStorage.getItem("feedback"));
      const newFeedback = feedBackData.filter(
        ele => JSON.stringify(ele) !== JSON.stringify(data)
      );
      this.setState({
        feedBackData: newFeedback
      });
    }
  };

  onDetails = data => () => {
    this.setState(prevState => ({
      modalDet: !prevState.modalDet,
      modalData: data
    }));
  };

  render() {
    const { recent, handleRecent } = this.props;
    const { feedBackData, modalDet, modalData } = this.state;

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
        {feedBackData &&
          feedBackData.map((ele, i) => (
            <div className="messages" key={String(i)}>
              <h3>
                <span>Disease:</span> {ele.data.disease}
              </h3>
              <span
                style={{
                  position: "relative",
                  left: "319px",
                  top: "-10px",
                  backgroundColor: "red",
                  padding: "0px 8px",
                  borderRadius: "5px"
                }}
                onClick={this.handleDelete(ele)}
              >
                Delete
              </span>
              <div className="disease">
                <h4 onClick={this.onDetails(ele)}>Details</h4>
                <h6>Date: {ele.date}</h6>
              </div>
            </div>
          ))}
        {modalDet && (
          <Modal show={modalDet} handleClose={this.onDetails({})}>
            <p>
              <span className="modalSpan">Disease: </span>{" "}
              <strong style={{ letterSpacing: "0.6px" }}>
                {modalData.data.disease}
              </strong>
            </p>
            <p>
              <span className="modalSpan">Remedy: </span>
              <strong style={{ letterSpacing: "0.6px" }}>
                {modalData.data.remedy}
              </strong>
            </p>
          </Modal>
        )}
      </StyledResponses>
    );
  }
}

export default Responses;
