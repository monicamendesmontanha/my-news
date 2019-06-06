import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHeadphones,
  faNewspaper
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import speak from "./speak";
import "./FeedItem.scss";
import Share from "./Share";

library.add(faHeadphones, faNewspaper);

function clickToSpeak(item) {
  speak(`${item.title} ${item.summary}`);
}

const FeedItem = props => (
  <li key={props.item.guid} className="item">
    {/* TODO: SHOW IMAGE */}
    {/* <img alt={item.alt} src={item.image} /> */}
    <button>
      <FontAwesomeIcon
        onClick={() => clickToSpeak(props.item)}
        icon={faHeadphones}
      />
    </button>
    <h3
      onClick={() => {
        props.handleReadMoreClick(props.item);
      }}
    >
      {props.item.title}
    </h3>
    <p>
      {props.item.summary}
    </p>

    <a href={props.item.link}>
      <FontAwesomeIcon icon={faNewspaper} />
    </a>
    <p>{props.item.pubdate}</p>

    <Share item={props.item}/>
  </li>
);

export default FeedItem;
