import React from "react";
import FeedId from "./FeedId";
import './Articles.scss'

const Articles = props => (
  <div className="articles">
    <h1>Articles</h1>
    {props.this.state.articles.map(feed => {
      return (
        <FeedId key={feed.feedId} feed={feed} />
      );
    })}
  </div>
)

export default Articles;