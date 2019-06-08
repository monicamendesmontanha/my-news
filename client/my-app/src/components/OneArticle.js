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

function clickToSpeak(item, singleArticle) {
  speak(`${item.title} ${item.summary} ${singleArticle.content}`);
}

const OneArticle = props => (
  <div className="article">
    <button>
      <FontAwesomeIcon
        onClick={() => clickToSpeak(props.item, props.singleArticle)}
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
    <p>{ props.singleArticle.content }</p>
    <a href={props.item.link} rel='noreferrer noopener' target="_blank">
      <FontAwesomeIcon icon={faNewspaper} />
    </a>

  </div>
);

export default OneArticle;
