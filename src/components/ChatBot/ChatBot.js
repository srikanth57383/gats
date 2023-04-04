/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */

import React, { Component } from "react";
import fetch from "isomorphic-fetch";
import ScrollToBottom from "react-scroll-to-bottom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ChatBot.css";

class chatbot extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.state = {
      sessionID: null,
      messege: [],
      userinput: "",
      showChat: false,
      loading: false,
    };
    this.handlechange = this.handlechange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showChatWindow = this.showChatWindow.bind(this);
    this.defaultMsg =
      "Can you reword your statement? I'm not understanding. For your further convenience contact +91 40 2354 9363";
  }

  componentDidMount() {
    this.getNewSession();
    this.setState({
      messege: [
        ...this.state.messege,
        {
          user: "",
          bot: {
            text: "Hey there, I am Zybot. Ask me anything I'll try to answer",
            description: null,
            options: null,
          },
        },
      ],
    });
  }

  getNewSession() {
    if (this.state.sessionID === null)
      fetch("https://stark-crag-70246.herokuapp.com/session")
        .then(session => {
          this.setState({ loading: true });
          return session.json();
        })
        .then(data => {
          this.setState({ sessionID: data.session });
        })
        .then(() => {
          this.setState({ loading: false });
          setTimeout(() => {
            this.setState({ sessionID: null });
          }, 300000);
        });
  }

  handlechange(event) {
    this.setState({ userinput: event.target.value });
  }

  showChatWindow() {
    this.setState({ showChat: !this.state.showChat });
  }

  handleSubmit(event) {
    if (this.state.sessionID === null) {
      this.getNewSession();
    }
    event.preventDefault();
    if (this.state.userinput !== "") {
      this.setState({
        loading: true,
        messege: [
          ...this.state.messege,
          { user: this.state.userinput, bot: { text: "" } },
        ],
      });
      fetch("https://stark-crag-70246.herokuapp.com/zyclyx", {
        method: "post",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          text: this.state.userinput,
          session_id: this.state.sessionID,
        }),
      })
        .then(response => {
          return response.json();
        })
        .then(botReply => {
          if (botReply.length !== 0 && botReply[0].response_type === "text") {
            this.setState({
              messege: [
                ...this.state.messege,
                {
                  user: "",
                  bot: {
                    text: botReply[0].text,
                    description: null,
                    options: null,
                  },
                },
              ],
            });
          }
          if (botReply.length !== 0 && botReply[0].response_type === "option") {
            this.setState({
              messege: [
                ...this.state.messege,
                {
                  user: "",
                  bot: {
                    text: botReply[0].title,
                    description: botReply[0].description,
                    options: botReply[0].options,
                  },
                },
              ],
            });
          }
          if (botReply.length === 0) {
            this.setState({
              messege: [
                ...this.state.messege,
                {
                  user: "",
                  bot: {
                    text: this.defaultMsg,
                    description: null,
                    options: null,
                  },
                },
              ],
            });
          }
        })
        .then(() => {
          this.setState({ userinput: "", loading: false });
          this.textInput.current.focus();
        });
    }
  }

  render() {
    const { showChat } = this.state;
    return (
      <>
        <button
          type="button"
          className=" chatbtn px-2 py-2"
          aria-label="chatbot"
          onClick={this.showChatWindow}
        >
          <FontAwesomeIcon icon={["fab", "rocketchat"]} />
        </button>
        {showChat ? (
          <>
            <div className="chatbox">
              <div className="card-header chat-header d-flex justify-content-between">
                <h5 className="h6 m-0">Zybot</h5>
                <button
                  type="button"
                  className="close-chat"
                  onClick={this.showChatWindow}
                >
                  <FontAwesomeIcon icon={["fas", "times"]} />
                </button>
              </div>

              <ScrollToBottom mode="bottom" className="card-body chat-body ">
                <div className="messages" id="chat">
                  {this.state.messege.length !== 0 &&
                    this.state.messege.map(response => {
                      return (
                        <div>
                          {response.user !== "" ? (
                            <div className="message parker">
                              {response.user}
                            </div>
                          ) : (
                            <></>
                          )}
                          {response.bot.text !== "" ? (
                            <div className="message stark">
                              {response.bot.text}
                              <p>
                                {response.bot.description
                                  ? response.bot.description
                                  : null}
                              </p>
                              <p>
                                {response.bot.options &&
                                  response.bot.options.map(
                                    item => `${item.label}, `
                                  )}
                              </p>
                            </div>
                          ) : (
                            <></>
                          )}
                        </div>
                      );
                    })}
                </div>
              </ScrollToBottom>

              <div className="card-footer p-0 bottom-fixed">
                <form
                  className="d-flex justify-content-between px-3 chat-form"
                  onSubmit={this.handleSubmit}
                >
                  <div className="input">
                    <input
                      placeholder="Type a message"
                      type="text"
                      name="userinput"
                      value={this.state.userinput}
                      onChange={this.handlechange}
                      disabled={this.state.loading}
                      ref={this.textInput}
                    />
                  </div>
                  <button
                    type="submit"
                    aria-label="send message"
                    className="send-chat px-3"
                    disabled={this.state.loading}
                  >
                    {this.state.loading ? (
                      <div
                        className="spinner-border text-success"
                        role="status"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                    ) : (
                      <FontAwesomeIcon icon={["fas", "paper-plane"]} />
                    )}
                  </button>
                </form>
              </div>
            </div>
          </>
        ) : null}
      </>
    );
  }
}

export default chatbot;
