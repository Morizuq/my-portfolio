import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://twitter.com/morizuq">
        <BsTwitter />
        </a>
      </div>
      <div>
        <a href="https://facebook.com/damian.morizuq">
        <FaFacebookF />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/_morizuq_/">
        <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
