import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHeadphones,
  faShare,
  faNewspaper
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import speak from "./speak";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton
} from "react-share";
import {
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailIcon
} from "react-share";
import "./OneArticle.scss";
import Share from "./Share";



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
    <h3>{props.item.title}
    </h3>
    <p>{props.item.pubdate}</p>
    <p>
      {props.item.summary}
    </p>

    <a href={props.item.link}>
      <FontAwesomeIcon icon={faNewspaper} />
    </a>

  </div>
);

export default OneArticle;
