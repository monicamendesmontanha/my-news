import React from "react";
import FeedId from "./FeedId";

const Articles = props => (
  <>
    <h1>Articles</h1>
    {props.this.state.articles.map(feed => {
      return (
        <FeedId key={feed.feedId} feed={feed} />
      );
    })}
  </>
)

export default Articles;