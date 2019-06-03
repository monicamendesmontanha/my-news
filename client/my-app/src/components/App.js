import React, { Component } from "react";
import Articles from "./Articles";

const synth = window.speechSynthesis;

const speak = text => {
  if (synth.speaking) {
    console.error("speechSynthesis.speaking");
    return;
  }
  if (text !== "") {
    var utterThis = new SpeechSynthesisUtterance(text);
    utterThis.onend = function(event) {
      console.log("SpeechSynthesisUtterance.onend");
    };
    utterThis.onerror = function(event) {
      console.error("SpeechSynthesisUtterance.onerror");
    };

    utterThis.voice = synth.getVoices()[0];
    utterThis.pitch = "1";
    utterThis.rate = "1";
    synth.speak(utterThis);
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: []
    };
  }

  async componentDidMount() {
    const self = this;

    fetch("http://localhost:8000/feed")
      .then(response => response.json())
      .then(articles => self.setState({ articles }))
      .catch(error => console.log("parsing failed", error));

    speak("Content loaded!");
  }

  render() {
    return <Articles this={this} />;
  }
}

export default App;
