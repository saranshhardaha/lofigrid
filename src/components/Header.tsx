import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Icon from "react-icons/lu";

const Header: React.FC = () => {
  const [fullscreen, setFullscreen] = useState(false);


  const fullscreenHandler = () => {
    if (!fullscreen) {
      setFullscreen(true);
      const e = document.documentElement;
      if (e.requestFullscreen) e.requestFullscreen();
    } else {
      setFullscreen(false);
      if (document.exitFullscreen) document.exitFullscreen();
    }
  };

  return (
    <nav className="absolute z-10 top-0 left-0 w-full flex items-center justify-between gap-4 p-4 text-white bg-black/5 backdrop-blur-sm font-mono">
      <Link to="/" className="custom-font text-xl leading-8">Lofi Grid</Link>
      <div className="flex items-center justify-center gap-4 text-neutral-300">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/phuclevinh2000/Lofi-website"
        >
          <Icon.LuGithub />
        </a>
        <button onClick={fullscreenHandler}>
          <Icon.LuExpand />
        </button>
      </div>
    </nav>
  );
};

export default Header;
