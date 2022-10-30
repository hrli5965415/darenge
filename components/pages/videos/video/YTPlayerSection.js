import { useRouter } from "next/router";
import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";

export const YTPlayerSection = ({ playerRef, courseDocument }) => {
  const router = useRouter();
  const { videoRef } = useSelector((state) => state.doc);

  useEffect(() => {
    let myInterval;
    const copyChapters = [...courseDocument.chapters];
    const reverseChapters = copyChapters.reverse();

    const myFunc = () => {
      const currentChapter = reverseChapters.find((chapter) => {
        return videoRef.getCurrentTime() >= chapter.chapterTime;
      });
      const currentPlayerState = videoRef
        .getInternalPlayer()
        ?.getPlayerState?.();
      if (
        currentChapter &&
        !router.asPath.includes(currentChapter?.chapterUrl) &&
        (currentPlayerState === 1 || currentPlayerState === 2)
      ) {
        const currentChapterName = router.asPath.split("/").at(-1);
        const targetPath = router.asPath.replace(
          currentChapterName,
          currentChapter.chapterUrl
        );
        router.push(targetPath, undefined, {
          scroll: false,
        });
      }
    };

    if (Object.keys(videoRef || {}).length !== 0) {
      myInterval = setInterval(myFunc, 500);
      console.log("test");
    }
    return () => clearInterval(myInterval);
  });
  return (
    <ReactPlayer
      ref={playerRef}
      url={"https://www.youtube.com/watch?v=MT-GJQIY3EU"}
      controls
      playing={true}
      width="100%"
      height="100%"
    />
  );
};
