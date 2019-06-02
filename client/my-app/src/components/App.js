import React from "react";

const FeedItem = props => (
  <li key={props.item.title}>
    <h3>{props.item.title}</h3>
    <p>{props.item.summary}</p>
  </li>
)

class App extends React.Component {
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
      <>
        <h1>Articles</h1>
        {this.state.articles.map(feed => {
          return (
            <>
              <h2>{feed.feedId}</h2>
              <ul key={feed.feedId}>
                {feed.items.map(item => {
                  return (<FeedItem item={item} />);
                })}
              </ul>
            </>
          );
        })}
      </>
    );
  }
}

export default App;
