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
      <div className="speak">
        <button
            onClick={() => clickToSpeak(props.item)}>
          <FontAwesomeIcon
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
        <h3 tabIndex="0"
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              props.handleReadMoreClick(props.item, props.feedId)
            }
          }}
          onClick={() => {
            props.handleReadMoreClick(props.item, props.feedId);
          }}
        >
          {props.item.title}
        </h3>
      </div>
      <div className="summaryItem">
        <p> { props.item.summary }</p>
      </div>
      <div className="footerItem">
        <Moment className="date" fromNow>
          {props.item.pubdate}
        </Moment>
        <div className="share">
          <Share item={props.item} />
        </div>
      </div>
    </li>
  </div>
);

export default FeedItem;
