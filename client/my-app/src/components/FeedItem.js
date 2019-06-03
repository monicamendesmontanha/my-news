import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeadphones, faShare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import speak from "./speak";


library.add(
  faHeadphones,
  faShare
)


function handleClick(item) {
  speak(item.title)
  speak(item.summary)
}


const FeedItem = props => (
  <li key={props.item.title}>
    <h3>{props.item.title}</h3>
    <p>{props.item.summary}</p>
    <FontAwesomeIcon onClick={() => handleClick(props.item)} icon={faHeadphones} />
    <FontAwesomeIcon icon={faShare} />
  </li>
)

export default FeedItem;
