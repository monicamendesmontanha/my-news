import React, { Component } from "react";
import AllArticles from "./AllArticles";
import speak from "./speak";
import Menu from "./Menu";
import "./App.scss";
import "./Menu.scss";
import OneArticle from './OneArticle';

const BackButton = props => <button onClick={props.onClick}>Back</button>;

class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      readMore: false,
      selectedItem: null,
      singleArticle: null
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
    const self = this;
    const url = item.link;

    fetch(`http://localhost:8000/feed/article?url="${url}"`)
      .then(response => response.json())
      .then(singleArticle => {
        self.setState({
          readMore: true,
          selectedItem: item,
          singleArticle: singleArticle
        });
      }).catch(error => console.log("parsing failed", error));
  }

  handleBackClick() {
    this.setState({ readMore: false, selectedItem: null, singleArticle: null });
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
              <OneArticle
                item={this.state.selectedItem}
                singleArticle={this.state.singleArticle}
              />
            </>
          ) : (
            <AllArticles
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
