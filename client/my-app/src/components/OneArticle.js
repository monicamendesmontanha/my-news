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


library.add(faHeadphones, faShare, faNewspaper);

function clickToSpeak(item) {
  speak(`${item.title} ${item.summary}`);
}

const OneArticle = props => (
  <>
    {/* TODO: SHOW IMAGE */}
    {/* <img alt={item.alt} src={item.image} /> */}
    <button>
      <FontAwesomeIcon
        onClick={() => clickToSpeak(props.item)}
        icon={faHeadphones}
      />
    </button>
    <h3>{props.item.title}
    </h3>
    <p>
      {props.item.summary}
      {/* {props.button} */}
    </p>

    <a href={props.item.link}>
      <FontAwesomeIcon icon={faNewspaper} />
    </a>
    <p>{props.item.pubdate}</p>

    <div className="share">
      <LinkedinShareButton url={props.item.link}>
        <LinkedinIcon size={25} borderRadius={10} />
      </LinkedinShareButton>
      <TwitterShareButton url={props.item.link}>
        <TwitterIcon size={25} borderRadius={10} />
      </TwitterShareButton>
      <WhatsappShareButton url={props.item.link}>
        <WhatsappIcon size={25} borderRadius={10} />
      </WhatsappShareButton>
      <FacebookShareButton url={props.item.link}>
        <FacebookIcon size={25} borderRadius={10} />
      </FacebookShareButton>
      <EmailShareButton url={props.item.link}>
        <EmailIcon size={25} borderRadius={10} />
      </EmailShareButton>
    </div>
    </>
);

export default OneArticle;
