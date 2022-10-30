import React, { useState } from "react";
import styled from "styled-components";
import Plyr from "plyr";
import { useEffect } from "react";
import { useRef } from "react";
import ReactPlayer from "react-player";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { CLOUDFRONT, IXIGUA } from "../../../../constants/constant";
import { CustomPlayer } from "../../courses/course/CustomPlayer";
import { SyncButton } from "../../courses/course/SyncButton";
import { usePlayer } from "../../../../hooks/usePlayer";
import {
  changeVideoRef,
  changeVideoSource,
} from "../../../../redux/slice/docSlice";
import Image from "next/image";
import { YTPlayerSection } from "./YTPlayerSection";
import { IxiguaPlayerSection } from "./IxiguaPlayerSection";

export const VideoPlayerSection = ({ courseDocument }) => {
  const router = useRouter();

  const { playerRef, hasWindow, setHasWindow } = usePlayer();

  const { videoSource } = useSelector((state) => state.doc);
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  useEffect(() => {
    if (playerRef.current !== undefined) {
      dispatch(changeVideoRef(playerRef.current));
    }
  });

  if (hasWindow && router.locale === "zh-TW") {
    return (
      <StyledVideoSection>
        <YTPlayerSection
          playerRef={playerRef}
          courseDocument={courseDocument}
        />
      </StyledVideoSection>
    );
  } else if (router.locale === "zh-CN" && videoSource === IXIGUA) {
    //get current Chapter
    const currentChapter = courseDocument.chapters.find(
      (chapter) => chapter.chapterUrl === router.query.videoSlug[1]
    );
    //get current IframeUrl
    const currentIframeUrl = currentChapter.iframeUrl;
    return (
      <StyledVideoSection>
        <IxiguaPlayerSection currentIframeUrl={currentIframeUrl} />
      </StyledVideoSection>
    );
  }
  // else if (router.locale === "zh-CN" && videoSource === CLOUDFRONT) {
  //   return <CustomPlayer playerRef={playerRef} videoSource={videoSource} />;
  // }
};

const StyledVideoSection = styled.div`
  aspect-ratio: 16 / 9;
  padding-left: 40px;
  padding-bottom: 80px;
  position: relative;

  & > .sync-btn {
    position: absolute;
    left: 0;
    bottom: 20px;
  }
  .btn-group {
    position: absolute;
    left: 0;
    bottom: 20px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .src-btn-group {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }

  .src-btn {
    border: none;
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(20, 20, 20, 0.5);
    background-color: var(--src-btn-color);
    width: 45px;
    height: 45px;
    padding: 8px;
    cursor: pointer;
  }

  .src-btn.active {
    background-color: rgb(48, 114, 255);
  }
  @media (max-width: 1200px) {
    padding: 0px;
  }
`;
