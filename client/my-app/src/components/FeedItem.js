import React, { Component } from "react";
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
import "./FeedItem.scss";

library.add(faHeadphones, faShare, faNewspaper);

function clickToSpeak(item) {
  speak(`${item.title} ${item.summary}`);
}

class FeedItem extends Component {

  render() {
		const item = this.props.item;

    return (
      <div>
        <li key={item.guid} className="item">
          {/* TODO: SHOW IMAGE */}
          {/* <img alt={item.alt} src={item.image} /> */}
          <button>
            <FontAwesomeIcon
              onClick={() => clickToSpeak(item)}
              icon={faHeadphones}
            />
          </button>
          <h3>{item.title}</h3>
          <p>
            {item.summary}
            <a href={item.link}>
              <FontAwesomeIcon icon={faNewspaper} />
            </a>
          </p>
          <p>{item.pubdate}</p>

          <div className="share">
            <LinkedinShareButton url={item.link}>
              <LinkedinIcon size={25} borderRadius={10} />
            </LinkedinShareButton>
            <TwitterShareButton url={item.link}>
              <TwitterIcon size={25} borderRadius={10} />
            </TwitterShareButton>
            <WhatsappShareButton url={item.link}>
              <WhatsappIcon size={25} borderRadius={10} />
            </WhatsappShareButton>
            <FacebookShareButton url={item.link}>
              <FacebookIcon size={25} borderRadius={10} />
            </FacebookShareButton>
            <EmailShareButton url={item.link}>
              <EmailIcon size={25} borderRadius={10} />
            </EmailShareButton>
          </div>
        </li>
      </div>
    );
  }
}

export default FeedItem;
