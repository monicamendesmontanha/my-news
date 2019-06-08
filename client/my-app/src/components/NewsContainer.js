import React from "react";
import FeedItem from "./FeedItem";
import "./NewsContainer.scss";

const NewsContainer = props => (
  <>
    <h2>{props.feed.feedId}</h2>
    <ul key={props.feed.feedId} className="container">
      {props.feed.items.map(item => {
        return (
          <FeedItem
            key={item.title}
            item={item}
            feedId={props.feed.feedId}
            handleReadMoreClick={props.handleReadMoreClick}
          />
        );
      })}
    </ul>
  </>
);

export default NewsContainer;
