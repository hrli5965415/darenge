import Image from "next/image";
import React from "react";

export const IxiguaPlayerSection = ({ currentIframeUrl }) => {
  return (
    <>
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        src={currentIframeUrl}
        referrerPolicy="unsafe-url"
        allowFullScreen
      ></iframe>
      {/* <div className="btn-group">
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
      </div> */}
    </>
  );
};
