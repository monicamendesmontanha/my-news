import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeadphones, faShare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


library.add(
  faHeadphones,
  faShare
)

const FeedItem = props => (
  <li key={props.item.title}>
    <h3>{props.item.title}</h3>
    <p>{props.item.summary}</p>
    <FontAwesomeIcon icon={faHeadphones} />
    <FontAwesomeIcon icon={faShare} />
  </li>
)

export default FeedItem;
