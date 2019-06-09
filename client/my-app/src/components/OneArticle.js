import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHeadphones,
  faArrowAltCircleLeft,
  faPauseCircle,
  faPlayCircle,
  faStopCircle
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import getSpeakUtterance from "./getSpeakUtterance";
import "./OneArticle.scss";
import Share from "./Share";
import Moment from "react-moment";

library.add(
  faHeadphones,
  faArrowAltCircleLeft,
  faPauseCircle,
  faPlayCircle,
  faStopCircle
);
const synth = window.speechSynthesis;

const PlayButton = ({ item, singleArticle, toggleSpeaking }) => (
  <button
    className="play"
    onClick={() => {
      const title = item.title;
      const summary = item.summary;
      const content = singleArticle.content;
      const utterance = getSpeakUtterance(`${title} ${summary} ${content}`);
      synth.speak(utterance);

      toggleSpeaking();
    }}
  >
    <FontAwesomeIcon icon={faHeadphones} />
  </button>
);

const ResumeButton = ({ toggleSpeaking }) => (
  <button
    className="play"
    onClick={() => {
      synth.resume();
      toggleSpeaking();
    }}
  >
    <FontAwesomeIcon icon={faPlayCircle} />
  </button>
);

class OneArticle extends Component {
  constructor() {
    super();
    this.state = {
      firstTime: true,
      isSpeaking: false
    };

    this.toggleSpeaking = this.toggleSpeaking.bind(this);
  }

  toggleSpeaking() {
    this.setState({ isSpeaking: !this.state.isSpeaking });
  }

  render() {
    return (
      <>
        <div className="navArticle">
          <button
            className="backButton"
            onClick={() => {
              this.props.handleBackClick();
              synth.cancel();
            }}
          >
            <FontAwesomeIcon icon={faArrowAltCircleLeft} />
          </button>

          <>
            {this.state.isSpeaking ? (
              <button
                className="play"
                onClick={() => {
                  synth.pause();
                  this.toggleSpeaking();
                  this.setState({ firstTime: false });
                }}
              >
                <FontAwesomeIcon icon={faPauseCircle} />
              </button>
            ) : (
              <>
                {this.state.firstTime ? (
                  <PlayButton
                    item={this.props.item}
                    singleArticle={this.props.singleArticle}
                    toggleSpeaking={this.toggleSpeaking}
                  />
                ) : (
                  <ResumeButton toggleSpeaking={this.toggleSpeaking} />
                )}
              </>
            )}
          </>

          <div className="iconShare">
            <Share item={this.props.item} />
          </div>
          <a
            className="viewOriginal"
            href={this.props.item.link}
            rel="noreferrer noopener"
            target="_blank"
          >
            View Original
          </a>
        </div>
        <div className="article">
          <h3 className="title">{this.props.item.title}</h3>
          <p className="summary">{this.props.item.summary}</p>
          <div>
            <p className="articleDate">
              <Moment format="D MMM YYYY" withTitle>
                {this.props.item.pubdate}
              </Moment>
            </p>
          </div>
          <p className="content">{this.props.singleArticle.content}</p>
        </div>
      </>
    );
  }
}

export default OneArticle;
