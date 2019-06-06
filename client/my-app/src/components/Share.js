import React from "react";
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
import "./Share.scss";

const Share = props => (
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
);

export default Share;
