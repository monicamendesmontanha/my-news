import React from "react";
import NewsContainer from "./NewsContainer";

const AllArticles = props => (
  <div className="articles">
    <h1>Articles</h1>
    {props.articles.map(feed => {
      return (
        <NewsContainer
          key={feed.NewsContainer}
          feed={feed}
          handleReadMoreClick={props.handleReadMoreClick}
        />
      );
    })}
  </div>
);

export default AllArticles;