import React from "react";
import {
  FaLinkedin,
  FaFacebookSquare,
  FaInstagramSquare,
  FaGithubSquare
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 text-white py-4 mt-auto">
      <div className="flex justify-center items-center md:space-x-4 space-y-4 md:space-y-0 gap-1">
        <p className="text-center md:text-left">Contact me:</p>
        <button onClick={() => window.open("https://www.facebook.com/debraz.zocee", "_blank")}>
          <FaFacebookSquare size={30} color="#1877F2" className="hover:scale-105" />
        </button>
        <button onClick={() => window.open("https://x.com/devrajoshi444", "_blank")}>
          <FaXTwitter size={30} color="#14171A" className="hover:scale-105" />
        </button>
        <button onClick={() => window.open("https://github.com/devrajoshi", "_blank")}>
          <FaGithubSquare size={30} color="#F6F8FA" className="hover:scale-105" />
        </button>
        <button onClick={() => window.open("https://www.linkedin.com/in/devraj-joshi/", "_blank")}>
          <FaLinkedin size={30} color="#0077B5" className="hover:scale-105" />
        </button>
        <button onClick={() => window.open("mailto:devrajoshi444@gmail.com", "_blank")}>
          <MdAttachEmail size={30} color="#E3E3E3" className="hover:scale-105" />
        </button>
      </div>
      <p className="text-center text-sm mt-2 px-4">
        © 2024 | Jokes & Quotes. All rights reserved. | Devraj Joshi
      </p>
    </footer>
  );
};

export default Footer; 
