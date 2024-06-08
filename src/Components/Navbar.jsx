import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="mx-2 w-10">AK</h1>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/ameykuradeak/">
          <FaLinkedin />
        </a>

        <a href="https://github.com/AmeyKuradeAK">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/__s_a_g_e/">
          <FaInstagram />
        </a>
        <a href="https://x.com/KuradeAmey">
          <FaSquareXTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
