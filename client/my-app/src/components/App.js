import React, { Component }from "react";

const Articles = props => (
  <>
    <h1>Articles</h1>
    {props.this.state.articles.map(feed => {
      return (
        <FeedId feed={feed} />
      );
    })}
  </>
)

const FeedId = props => (
  <>
    <h2>{props.feed.feedId}</h2>
    <ul key={props.feed.feedId}>
      {props.feed.items.map(item => {
        return (<FeedItem item={item} />);
      })}
    </ul>
  </>
)

const FeedItem = props => (
  <li key={props.item.title}>
    <h3>{props.item.title}</h3>
    <p>{props.item.summary}</p>
  </li>
)

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
  }

  render() {
    return (
      <Articles this={this}/>
    );
  }
}

export default App;
