import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHeadphones,
  faArrowAltCircleLeft
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import speak from "./speak";
import "./OneArticle.scss";
import Share from "./Share";
import Moment from "react-moment";

library.add(faHeadphones, faArrowAltCircleLeft );

function clickToSpeak(item, singleArticle) {
  speak(`${item.title} ${item.summary} ${singleArticle.content}`);
}

const OneArticle = props => (
  <>
    <div className="navArticle">
      <button className="backButton">
      <FontAwesomeIcon
          onClick={props.handleBackClick}
          icon={faArrowAltCircleLeft}
        />
      </button>
      <button className="play">
        <FontAwesomeIcon
          onClick={() => clickToSpeak(props.item, props.singleArticle)}
          icon={faHeadphones}
        />
      </button>
      <div className="iconShare">
        <Share item={props.item} />
      </div>
      <a className="viewOriginal" href={props.item.link} rel="noreferrer noopener" target="_blank">
      View Original
      </a>
    </div>
    <div className="article">
      <h3 className="title">{props.item.title}</h3>
      <p className="summary">{props.item.summary}</p>
      <div>
        <p className="articleDate">
        <Moment format="D MMM YYYY" withTitle>
          {props.item.pubdate}
        </Moment>
        </p>
      </div>
      <p className="content">{props.singleArticle.content}</p>
    </div>
  </>
);

export default OneArticle;
