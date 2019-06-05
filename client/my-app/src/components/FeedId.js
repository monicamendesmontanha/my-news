import React from "react";
import FeedItem from "./FeedItem";
import './FeedId.css'

const FeedId = props => (
  <div>
    <h2>{props.feed.feedId}</h2>
    <ul key={props.feed.feedId} className="container">
      {props.feed.items.map(item => {
        return (<FeedItem key={item.title} item={item} />);
      })}
    </ul>
  </div>
)

export default FeedId;