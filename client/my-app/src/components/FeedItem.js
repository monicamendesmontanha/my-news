import React from "react";
import { Link } from "react-router-dom";
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

library.add(faHeadphones, faShare, faNewspaper);

function clickToSpeak(item) {
  speak(item.title);
  speak(item.summary);
}

const FeedItem = props => (
  <li key={props.item.title}>
    <Link to={{ pathname: `/TextPage/${props.item}` }}>
      <img alt={props.alt} src={props.item.image} />
      <h3>{props.item.title}</h3>
      <p>{props.item.summary}</p>
      <p>{props.item.pubdate}</p>
    </Link>

    <LinkedinShareButton url={props.item.link}>
      <LinkedinIcon size={32} round={true} />
    </LinkedinShareButton>
    <TwitterShareButton url={props.item.link}>
      <TwitterIcon size={32} round={true} />
    </TwitterShareButton>
    <WhatsappShareButton url={props.item.link}>
      <WhatsappIcon size={32} round={true} />
    </WhatsappShareButton>
    <FacebookShareButton url={props.item.link}>
      <FacebookIcon size={32} round={true} />
    </FacebookShareButton>
    <EmailShareButton url={props.item.link}>
      <EmailIcon size={32} round={true} />
    </EmailShareButton>
    <a href={props.item.link}>
      <FontAwesomeIcon icon={faNewspaper} />
    </a>
    <button>
      <FontAwesomeIcon
        onClick={() => clickToSpeak(props.item)}
        icon={faHeadphones}
      />
    </button>
  </li>
);

export default FeedItem;
