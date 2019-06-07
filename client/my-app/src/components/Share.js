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
        <LinkedinIcon className="shareIcon" size={28} iconBgStyle={{fill:"white"}} logoFillColor={'#333333'}/>
      </LinkedinShareButton>
      <TwitterShareButton url={props.item.link}>
        <TwitterIcon className="shareIcon" size={28} iconBgStyle={{fill:"white"}} logoFillColor={'#333333'}/>
      </TwitterShareButton>
      <WhatsappShareButton url={props.item.link}>
    <WhatsappIcon className="shareIcon" size={28} iconBgStyle={{fill:"white"}} logoFillColor={'#333333'} />
      </WhatsappShareButton>
      <FacebookShareButton url={props.item.link}>
        <FacebookIcon className="shareIcon" size={28} iconBgStyle={{fill:"white"}} logoFillColor={'#333333'}/>
      </FacebookShareButton>
      <EmailShareButton url={props.item.link}>
        <EmailIcon className="shareIcon" size={28} iconBgStyle={{fill:"white"}} logoFillColor={'#333333'}/>
      </EmailShareButton>
    </div>
);

export default Share;
