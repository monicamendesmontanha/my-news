import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHeadphones,
  faShare,
  faNewspaper
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import speak from "./speak";
import "./OneArticle.scss";
import Share from "./Share";
import Moment from "react-moment";

library.add(faHeadphones, faShare, faNewspaper);

function clickToSpeak(item) {
  speak(`${item.title} ${item.summary}`);
}

const OneArticle = props => (
  <div className="article">
    {/* TODO: SHOW IMAGE */}
    {/* <img alt={item.alt} src={item.image} /> */}
    <button>
      <FontAwesomeIcon
        onClick={() => clickToSpeak(props.item)}
        icon={faHeadphones}
      />
    </button>
    <Share item={props.item}/>
    <h3 className="title">{props.item.title}
    </h3>
    <div><Moment format="D MMM YYYY" withTitle>
            {props.item.pubdate}
          </Moment></div>
    <p>
      {props.item.summary}
    </p>

    <p>
      {props.singleArticle.content}
    </p>

    <a href={props.item.link}>
      <FontAwesomeIcon icon={faNewspaper} />
    </a>

  </div>
);

export default OneArticle;
