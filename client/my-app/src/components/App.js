import React, { Component } from "react";
import Articles from "./Articles";
import speak from "./speak";
import Menu from "./Menu";


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
    return (
      <>
        <Menu />
        <Articles this={this} />;
      </>
    )
  }
}

export default App;
