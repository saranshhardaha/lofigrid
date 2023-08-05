import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import { song } from "../types";

const Player = ({
  currentSongIndex,
  setCurrentSongIndex,
  songs,
}: {
  currentSongIndex: number;
  setCurrentSongIndex: (index: number) => void;
  songs: Array<song>; // Replace 'object' with the actual type of your songs array
}) => {
  const data = useSelector((state: RootState) => state.volumeState);

  const { volumeValue } = data;

  const audioElement = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audioElement.current) {
      if (isPlaying) {
        audioElement.current.play();
      } else {
        audioElement.current.pause();
      }
      audioElement.current.volume = volumeValue / 100;
    }
  }, [isPlaying, volumeValue, currentSongIndex]); // Add isPlaying and volumeValue to the dependency array

  const skipSong = (forwards = true) => {
    if (forwards) {
      let temp = currentSongIndex + 1;
      if (temp > songs.length - 1) {
        temp = 0;
      }
      currentSongIndex = temp;
      setCurrentSongIndex(temp);
    } else {
      let temp = currentSongIndex - 1;
      if (temp < 0) {
        temp = songs.length - 1;
      }
      currentSongIndex = temp;
      setCurrentSongIndex(temp);
    }
  };

  return (
    <>
      <audio loop src={songs[currentSongIndex]?.src} ref={audioElement}></audio>
      <div className="flex items-center justify-center">
        <button className="skip-btn" onClick={() => skipSong(false)}>
          <img src="/assets/icons/prev.svg" alt="" />
        </button>
        <button className="play-btn" onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? (
            <img src="/assets/icons/pause.svg" alt="" />
          ) : (
            <img src="/assets/icons/play.svg" alt="" />
          )}
        </button>
        <button className="skip-btn" onClick={() => skipSong()}>
          <img src="/assets/icons/next.svg" alt="" />
        </button>
      </div>
    </>
  );
};

export default Player;
