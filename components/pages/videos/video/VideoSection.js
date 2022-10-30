import React from "react";
import styled from "styled-components";
import { VideoPlayerSection } from "./VideoPlayerSection";

export const VideoSection = ({ courseDocument }) => {
  return (
    <StyledVideoSection>
      <VideoPlayerSection courseDocument={courseDocument} />
    </StyledVideoSection>
  );
};

const StyledVideoSection = styled.section`
  width: 100%;
  padding-top: 30px;
  padding-right: 30px;
  padding-left: 300px;
  padding-bottom: 100px;
  background-color: var(--doc-section-background-color);
  position: absolute;
  top: var(--navbar-height);
  height: auto;
  transition: padding-left 0.15s;
  min-height: calc(100% - var(--navbar-height));

  @media (max-width: 1500px) {
    padding-left: 300px;
  }
  @media (max-width: 1200px) {
    padding-left: 0px;
    padding-right: 0px;
  }
`;
