import React from "react";
import NewsContainer from "./NewsContainer";

const AllArticles = props => (
  <div className="articles">
    {props.articles.map(feed => {
      return (
        <NewsContainer
          key={feed.feedId}
          feed={feed}
          handleReadMoreClick={props.handleReadMoreClick}
        />
      );
    })}
  </div>
);

export default AllArticles;