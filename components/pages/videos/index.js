import Link from "next/link";
import React from "react";
import styled from "styled-components";

export const VideosListSection = ({ courses }) => {
  return (
    <StyledVideosListSection>
      {courses.map((course) => {
        return (
          <li key={course.courseUrl}>
            <Link
              href={`videos/${course.courseUrl}/${course.chapters[0].chapterUrl}`}
            >
              <a>{course.courseUrl}</a>
            </Link>
          </li>
        );
      })}
    </StyledVideosListSection>
  );
};

const StyledVideosListSection = styled.div`
  background-color: var(--main-background-color);
  color: var(--main-text-color);
  height: calc(100vh - var(--navbar-height));
  width: 100%;
  top: var(--navbar-height);
  padding: 50px 80px;
  position: absolute;
`;
