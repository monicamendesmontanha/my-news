import React from "react";
import FeedId from "./FeedId";

const Articles = props => (
  <div className="articles">
    <h1>Articles</h1>
    {props.articles.map(feed => {
      return (
        <FeedId
          key={feed.feedId}
          feed={feed}
          handleReadMoreClick={props.handleReadMoreClick}
        />
      );
    })}
  </div>
);

export default Articles;