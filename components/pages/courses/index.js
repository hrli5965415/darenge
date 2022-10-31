import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { nameToUrl } from "../../../utils/utility";

export const CoursesSection = ({ courses }) => {
  return (
    <StyledCoursesSection>
      {courses.map((course) => {
        return (
          <li key={course.courseUrl}>
            <Link
              href={`courses/${course.courseUrl}/${course.chapters[0].chapterUrl}`}
            >
              <a>
                <div className="course">
                  <div className="course-icon">
                    <Image
                      width={100}
                      height={100}
                      src={course.courseIconPath}
                      alt={course.courseUrl}
                      priority={true}
                    />
                  </div>
                  <div className="course-name">{course.courseName}</div>
                </div>
              </a>
            </Link>
          </li>
        );
      })}
    </StyledCoursesSection>
  );
};

const StyledCoursesSection = styled.section`
  background-color: var(--main-background-color);
  color: var(--main-text-color);
  height: calc(100vh - var(--navbar-height));
  width: 100%;
  top: var(--navbar-height);
  padding: 100px 200px;
  position: absolute;

  li {
    width: 500px;
  }

  .course {
    background-color: rgb(50, 50, 50);
    box-shadow: 0px 0px 10px 1px black;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    transition: transform 0.1s ease-in;
  }
  .course:hover {
    transform: translateY(-4px);
  }
  .course-icon {
    background-color: orange;
    padding: 10px;
    border-radius: 15px 0 0 15px;
  }
  .course-name {
    font-size: 45px;
    margin-left: 20px;
    color: white;
  }
  @media (max-width: 1000px) {
    padding: 50px 50px;
  }
  @media (max-width: 650px) {
    padding: 50px 50px;
    li {
      width: 350px;
    }
    .course-name {
      font-size: 35px;
    }
    .course-icon {
      width: 80px;
      height: 80px;
    }
  }
  @media (max-width: 500px) {
    padding: 30px 30px;
    li {
      width: 300px;
    }
    .course-name {
      font-size: 30px;
    }
    .course-icon {
      width: 70px;
      height: 70px;
    }
  }
`;
