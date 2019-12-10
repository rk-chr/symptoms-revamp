import React from "react";
import ChatBot from "react-simple-chatbot";
import { withRouter } from "react-router-dom";

class ChatBox extends React.Component {
  handleRoute = path => {
    const { history } = this.props;
    return new Promise(resolve =>
      resolve(
        setTimeout(() => {
          history.push(path);
        }, 3100)
      )
    );
  };

  render() {
    const { name, handleState } = this.props;
    const pattern = new RegExp(/(i|need|medication|yes)/gi);
    const yesValidate = new RegExp(/(yes|yup)/gi);
    const steps = [
      {
        id: "0",
        message: `Welcome ${name}`,
        trigger: "1"
      },
      {
        id: "1",
        message: "How can I help you?",
        trigger: "2"
      },
      {
        id: "2",
        user: true,
        validator: value => {
          if (!pattern.test(value)) {
            return "sorry I didn't get you?";
          }
          return true;
        },
        trigger: "3"
      },
      {
        id: "3",
        message: "Do you want me to take dashboard?",
        trigger: "4"
      },
      {
        id: "4",
        user: true,
        validator: value => {
          if (yesValidate.test(value)) {
            this.handleRoute("/dashboard").then(res => res);
            return true;
          } else if (value === "no") {
            handleState().then(res => res);
            return "Okay. Have a nice day!";
          }
          return "sorry! I didn't get you?";
        },
        trigger: "5"
      },
      {
        id: "5",
        message: "Okay. Redirecting to dashboard...",
        end: true
      }
    ];
    return (
      <div style={{ marginLeft: "38px" }}>
        <ChatBot steps={steps} />
      </div>
    );
  }
}

export default withRouter(ChatBox);
