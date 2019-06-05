import React from "react";
import FeedItem from "./FeedItem";
import './FeedId.scss'

const FeedId = props => (
  <>
    <h2>{props.feed.feedId}</h2>
    <ul key={props.feed.feedId} className="container">
      {props.feed.items.map(item => {
        return (<FeedItem key={item.title} item={item} />);
      })}
    </ul>
  </>
)

export default FeedId;