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

const Share = ({ item, size = 27 }) => (
  <>
    <LinkedinShareButton url={item.link}>
      <LinkedinIcon size={size} iconBgStyle={{fill:"white"}} logoFillColor={'#333333'}/>
    </LinkedinShareButton>
    <TwitterShareButton url={item.link}>
      <TwitterIcon size={size} iconBgStyle={{fill:"white"}} logoFillColor={'#333333'}/>
    </TwitterShareButton>
    <WhatsappShareButton url={item.link}>
  <WhatsappIcon size={size} iconBgStyle={{fill:"white"}} logoFillColor={'#333333'} />
    </WhatsappShareButton>
    <FacebookShareButton url={item.link}>
      <FacebookIcon size={size} iconBgStyle={{fill:"white"}} logoFillColor={'#333333'}/>
    </FacebookShareButton>
    <EmailShareButton url={item.link}>
      <EmailIcon size={size} iconBgStyle={{fill:"white"}} logoFillColor={'#333333'}/>
    </EmailShareButton>
  </>
);

export default Share;
