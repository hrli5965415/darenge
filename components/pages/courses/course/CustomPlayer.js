import Image from "next/image";
import Plyr from "plyr";
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { CLOUDFRONT, IXIGUA } from "../../../../constants/constant";
import { changeVideoSource } from "../../../../redux/slice/docSlice";
import { SyncButton } from "./SyncButton";

export const CustomPlayer = ({ playerRef, videoSource }) => {
  const videoRef = useRef();

  useEffect(() => {
    playerRef.current = new Plyr(videoRef.current);
  }, []);

  const dispatch = useDispatch();

  const seekTo = () => {
    if (playerRef.current) {
      playerRef.current.currentTime = 20;
    }
  };

  return (
    <StyledCustomPlayer>
      <video controls ref={videoRef} id="player">
        <source
          src="https://dl8.webmfiles.org/elephants-dream.webm"
          type="video/webm"
        ></source>
      </video>
      <div className="btn-group">
        <SyncButton syncFunc={() => seekTo()}></SyncButton>
        <div className="src-btn-group">
          <button
            className={`src-btn ${videoSource === IXIGUA ? "active" : ""} `}
            onClick={() => dispatch(changeVideoSource(IXIGUA))}
          >
            <Image src="/ixigua.svg" width={40} height={40} alt="ixigua" />
          </button>
          <button
            className={`src-btn ${videoSource === CLOUDFRONT ? "active" : ""} `}
            onClick={() => dispatch(changeVideoSource(CLOUDFRONT))}
          >
            <Image
              src="/cloudfront.svg"
              width={40}
              height={40}
              alt="cloudfront"
            />
          </button>
        </div>
      </div>
    </StyledCustomPlayer>
  );
};

const StyledCustomPlayer = styled.div`
  aspect-ratio: 16 / 9;
  padding-left: 40px;
  padding-bottom: 80px;
  max-width: 1440px;
  max-height: 810px;
  position: relative;

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
`;
