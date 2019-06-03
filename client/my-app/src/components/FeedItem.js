import React from "react";

const FeedItem = props => (
  <li key={props.item.title}>
    <h3>{props.item.title}</h3>
    <p>{props.item.summary}</p>
  </li>
)

export default FeedItem;