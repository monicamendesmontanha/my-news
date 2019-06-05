import React, { Component } from "react";
import Articles from "./Articles";
import speak from "./speak";
import Menu from "./Menu";
import "./App.css";


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
      <div className="wrapper">
        <header>
          <Menu />
        </header>
        <body>
          <Articles this={this} />;
        </body>
      </div>
    )
  }
}

export default App;
