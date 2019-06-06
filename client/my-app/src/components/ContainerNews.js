import React from "react";
import FeedItem from "./FeedItem";
import "./ContainerNews.scss";

const ContainerNews = props => (
  <>
    <h2>{props.feed.feedId}</h2>
    <ul key={props.feed.feedId} className="container">
      {props.feed.items.map(item => {
        return (
          <FeedItem
            key={item.title}
            item={item}
            handleReadMoreClick={props.handleReadMoreClick}
          />
        );
      })}
    </ul>
  </>
);

export default ContainerNews;
