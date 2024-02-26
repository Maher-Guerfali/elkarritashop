import React from "react";
import {
  AiOutlineLinkedin,
  AiFillGithub,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="py-5 mt-3  bg-amber-50 flex flex-wrap justify-center items-center gap-2 md:gap-10  absolute right-0 left-0 ">
      <p>El karrita Shop made with ❤️🍉 </p>
      <p className="flex gap-3">
        <a href="https://github.com/SandhyaR1007">
          <AiFillGithub className="text-2xl text-gray-800" />
        </a>
        <a href="https://www.linkedin.com/in/maher-guerfali/">
          {" "}
          <AiOutlineLinkedin className="text-2xl text-gray-800" />
        </a>
        <a href="https://www.instagram.com/elkarrita/">
          <AiOutlineInstagram className="text-2xl text-gray-800" />
        </a>
      </p>
    </div>
  );
};

export default Footer;
