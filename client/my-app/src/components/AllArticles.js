import React from "react";
import ContainerNews from "./ContainerNews";

const AllArticles = props => (
  <div className="articles">
    <h1>Articles</h1>
    {props.articles.map(feed => {
      return (
        <ContainerNews
          key={feed.ContainerNews}
          feed={feed}
          handleReadMoreClick={props.handleReadMoreClick}
        />
      );
    })}
  </div>
);

export default AllArticles;