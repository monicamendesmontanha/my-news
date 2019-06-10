import React, { Component } from "react";
import AllArticles from "./AllArticles";
import Menu from "./Menu";
import "./App.scss";
import "./Menu.scss";
import OneArticle from './OneArticle';

const BACKEND = "https://blooming-coast-36257.herokuapp.com";

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

    fetch(`${BACKEND}/feed`)
      .then(response => response.json())
      .then(articles => self.setState({ articles }))
      .catch(error => console.log("parsing failed", error));
  }

  handleReadMoreClick(item, feedId) {
    const self = this;
    const url = item.link;

    fetch(`${BACKEND}/feed/article/?url=${url}&feedId=${feedId}`)
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
              <OneArticle
                item={this.state.selectedItem}
                singleArticle={this.state.singleArticle}
                handleBackClick={this.handleBackClick}
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
