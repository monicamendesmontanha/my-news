import React, { Component } from "react";
import Articles from "./Articles";
import speak from "./speak";
import Menu from "./Menu";
import "./App.scss";

const OneArticle = props => <p>{props.selectedItem.title}</p>;
const BackButton = props => <button onClick={props.onClick}>Back</button>;

class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      readMore: false,
      selectedItem: null
    };

    this.handleReadMoreClick = this.handleReadMoreClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
  }

  async componentDidMount() {
    const self = this;

    fetch("http://localhost:8000/feed")
      .then(response => response.json())
      .then(articles => self.setState({ articles }))
      .catch(error => console.log("parsing failed", error));

    speak("Content loaded!");
  }

  handleReadMoreClick(item) {
    this.setState({ readMore: true, selectedItem: item });
  }

  handleBackClick() {
    this.setState({ readMore: false, selectedItem: null });
  }

  render() {
    return (
      <>
        <header className="menu">
          <Menu />
        </header>
        <main className="main">
          {this.state.readMore ? (
            <>
              <BackButton onClick={this.handleBackClick} />
              <OneArticle selectedItem={this.state.selectedItem} />
            </>
          ) : (
            <Articles
              articles={this.state.articles}
              handleReadMoreClick={this.handleReadMoreClick}
            />
          )}
        </main>
      </>
    );
  }
}

export default App;
