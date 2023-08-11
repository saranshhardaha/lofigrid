import React, { useState } from "react";
import { songs } from "../lib/songs";
import Player from "./Player";
import ModifierBoard from "./ModifierBoard";
import RainToggleButton from "./RainToggleButton";

const Footer: React.FC = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 0);

  return (
    <div className="absolute z-30 bottom-4 w-full">
      <div className="relative grid grid-cols-3 gap-4 text-white bg-black/40 p-4  mx-auto rounded-md backdrop-blur-sm w-full h-full">
        <div className="flex items-center justify-start text-xl font-bold font-mono">
          {/* <span>Made by Phuc Le, inspired by Lofi.co</span> */}
          <span>{songs[currentSongIndex].name}</span>
        </div>
        <Player
          currentSongIndex={currentSongIndex}
          setCurrentSongIndex={setCurrentSongIndex}
          songs={songs}
        />
        <div className="relative flex gap-4 items-center justify-end">
          <RainToggleButton />
          <ModifierBoard />
        </div>
      </div>
    </div>
  );
};

export default Footer;
 