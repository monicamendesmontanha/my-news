import React from "react";
import FeedItem from "./FeedItem";

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

export default FeedId;