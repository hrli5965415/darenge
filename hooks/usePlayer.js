import { useRef, useState } from "react";

export const usePlayer = () => {
  const [hasWindow, setHasWindow] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const playerRef = useRef();

  const seekTo = () => {
    playerRef.current.seekTo(1000);
    setIsPlaying(true);
  };

  return {
    hasWindow,
    setHasWindow,
    isPlaying,
    setIsPlaying,
    seekTo,
    playerRef,
  };
};
