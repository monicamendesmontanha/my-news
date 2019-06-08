import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeadphones, faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import speak from "./speak";
import "./FeedItem.scss";
import Share from "./Share";
import Moment from "react-moment";

library.add(faHeadphones, faNewspaper);

function clickToSpeak(item) {
  speak(`${item.title} ${item.summary}`);
}

const FeedItem = props => (
  <div>
    <li key={props.item.guid} className="item">
      {/* TODO: SHOW IMAGE */}
      {/* <img alt={item.alt} src={item.image} /> */}
      <div className="speak">
        <button>
          <FontAwesomeIcon
            onClick={() => clickToSpeak(props.item)}
            icon={faHeadphones}
          />
        </button>
      </div>
      <div className="linkSite">
        <a href={props.item.link} rel='noreferrer noopener' target="_blank">
          <FontAwesomeIcon icon={faNewspaper} />
        </a>
      </div>
      <div>
        <h3
          onClick={() => {
            props.handleReadMoreClick(props.item);
          }}
        >
          {props.item.title}
        </h3>
      </div>
      <div>
        <p>{props.item.summary}</p>
      </div>
      <div className="footerItem">
        <Moment className="date" fromNow>
          {props.item.pubdate}
        </Moment>
        <Share item={props.item} />
      </div>
    </li>
  </div>
);

export default FeedItem;
