import React from "react";
import Modal from "../Modal";

const smileys = [
  { id: 1, name: "Excellent", emoji: "😍" },
  { id: 2, name: "Good", emoji: "😊" },
  { id: 3, name: "Confused", emoji: "😏" },
  { id: 4, name: "Disappionated", emoji: "😒" }
];

class FeedbackModal extends React.Component {
  state = {
    emoji: "",
    show: true
  };

  handleEmoji = name => () => {
    return this.setState({
      emoji: name
    });
  };

  hideModal = () => {
    const { ClearState } = this.props;
    this.setState(prevState => ({
      show: !prevState.show
    }));
    ClearState();
  };

  handleFeedback = e => {
    e.preventDefault();
    const { data, ClearState } = this.props;
    const { emoji } = this.state;
    const d = new Date();
    const newData = {
      emoji,
      data,
      date: d.getDay() + "-" + d.getMonth() + "-" + d.getFullYear()
    };
    if (localStorage.getItem("feedback")) {
      const feedbackData = JSON.parse(localStorage.getItem("feedback"));
      localStorage.setItem(
        "feedback",
        JSON.stringify([...feedbackData, { ...newData }])
      );
    } else {
      localStorage.setItem("feedback", JSON.stringify([{ ...newData }]));
    }
    this.setState(prevState => ({
      show: !prevState.show
    }));
    ClearState();
    window.location.reload(false);
  };

  render() {
    const { data } = this.props;
    const { emoji } = this.state;

    return (
      <Modal show={this.state.show} handleClose={this.hideModal}>
        <p>
          <span className="modalSpan">Disease: </span>{" "}
          <strong style={{ letterSpacing: "0.6px" }}>{data.disease}</strong>
        </p>
        <p>
          <span className="modalSpan">Remedy: </span>
          <strong style={{ letterSpacing: "0.6px" }}>{data.remedy}</strong>
        </p>
        <div
          className="feedback"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {smileys.map(ele => (
            <div
              className={`smileys`}
              style={{ textAlign: "center", marginRight: "40px" }}
              key={ele.id}
              onClick={this.handleEmoji(ele.name)}
            >
              <span
                style={{ fontSize: "40px" }}
                role="img"
                aria-label={ele.name}
              >
                {ele.emoji}
              </span>
              <h4 className={`${emoji === ele.name ? "activeEmoji" : ""}`}>
                {ele.name}
              </h4>
            </div>
          ))}
        </div>
        <h5
          className="btn-modal"
          style={{ width: "20%" }}
          onClick={this.handleFeedback}
        >
          Save
        </h5>
      </Modal>
    );
  }
}

export default FeedbackModal;
