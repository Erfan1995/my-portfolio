import React from "react";
import { BsTwitter, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div >
      <a href="https://www.linkedin.com/in/ali-reza-erfan/">
      <BsLinkedin />
      </a>
    </div>
    <div>
      <a href="https://github.com/Erfan1995">
      <BsGithub />
      </a>
    </div>
    {/* <div> */}
      {/* <BsInstagram /> */}
    {/* </div>/ */}
  </div>
);

export default SocialMedia;
