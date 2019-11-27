import React from "react";
import ChatBot from "react-simple-chatbot";

class ChatBox extends React.Component {
  render() {
    const pattern = new RegExp(/(i|need|medication|yes)/gi);
    const steps = [
      {
        id: "0",
        message: "Welcome RAMA",
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
          if (value === "yes") {
            return true;
          } else if (value === "no") {
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
      <div
        style={{ margin: "auto", marginTop: "5rem", width: 400, hight: 500 }}
      >
        <ChatBot steps={steps} />
      </div>
    );
  }
}

export default ChatBox;
