import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  closeSidebarForSmallScreen,
  toggleSidebarForSmallScreen,
} from "../../../../redux/slice/docSlice";
import { loadLocalSideboxCheckboxThunk } from "../../../../thunk/thunk";
import { ChapterGroup } from "./ChapterGroup";

export const Sidebar = ({ courseDocument }) => {
  const { isSidebarOpen, isSidebarOpenOnSmallScreen, sidebarCheckboxList } =
    useSelector((state) => state.doc);
  const dispatch = useDispatch();
  const router = useRouter();

  //sorting all chapters into diffrent group
  const fiterGroupName = (groupName, chapters) => {
    let groupList = chapters.filter(
      (chapter) => chapter.chapterGroup === groupName
    );
    return groupList.map((chapter) => {
      return {
        chapterGroup: chapter.chapterGroup,
        chapterUrl: chapter.chapterUrl,
        chapterName: chapter.chapterName,
      };
    });
  };

  useEffect(() => {
    const sidebar = document.getElementById("sidebar");
    const navbarHeight = document.getElementById("navbar").offsetHeight;

    window.onscroll = (e) => {
      if (window.scrollY < navbarHeight && window.innerWidth > 1000) {
        sidebar.style.transform = `translateY(-${window.scrollY}px)`;
      } else if (window.scrollY > 60 && window.innerWidth > 1000) {
        sidebar.style.transform = `translateY(-60px)`;
      }
    };

    return () => {
      window.onscroll = null;
    };
  }, []);

  useEffect(() => {
    dispatch(
      loadLocalSideboxCheckboxThunk(router.locale + courseDocument.courseUrl)
    );
  }, []);

  return (
    <StyledSidebar
      isSidebarOpen={isSidebarOpen}
      id="sidebar"
      isSidebarOpenOnSmallScreen={isSidebarOpenOnSmallScreen}
    >
      <div
        className="sidebar-toggler-small"
        onClick={() => dispatch(closeSidebarForSmallScreen())}
      ></div>
      {courseDocument.chapterGroups.map((groupNameObj) => {
        return (
          <ChapterGroup
            groupNameObj={groupNameObj}
            groupList={fiterGroupName(
              groupNameObj.groupName,
              courseDocument.chapters
            )}
            courseUrl={courseDocument.courseUrl}
            key={groupNameObj.groupName}
            sidebarCheckboxList={sidebarCheckboxList}
          />
        );
      })}
    </StyledSidebar>
  );
};

const StyledSidebar = styled.aside`
  height: calc(100vh + var(--navbar-height));

  width: var(--sidebar-width);
  font-size: 30px;
  position: fixed;
  z-index: 5;
  padding-top: 100px;
  //top: var(--navbar-height);
  box-shadow: var(--box-shadow-around);
  background-color: var(--sidebar-background-color);
  left: -400px;
  transform: ${({ isSidebarOpen }) =>
    isSidebarOpen ? "translateX(400px)" : "0px"};
  transition: transform 0.15s;
  overflow: scroll;
  overflow-x: hidden;
  padding-bottom: 50px;

  .sidebar-toggler-small {
    display: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    background: url("/right-chevron.svg") no-repeat center/70%
      var(--icon-background-color);
    transform: rotateZ(180deg) scale(0.9);
    box-shadow: 0px 0px 5px black;
    margin-left: auto;
    margin-right: 20px;
    transition: transform 0.15s ease-in;
  }
  .sidebar-toggler-small:hover {
    transform: rotateZ(180deg) scale(0.95);
  }

  ul a {
    color: var(--sidebar-text-color);
  }
  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  @media (max-width: 1000px) {
    & {
      z-index: 15;
      height: 100vh;
      top: 0;
      left: -400px;
      /* left: ${({ isSidebarOpenOnSmallScreen }) =>
        isSidebarOpenOnSmallScreen ? "0px" : "-400px"}; */
      transform: ${({ isSidebarOpenOnSmallScreen }) =>
        isSidebarOpenOnSmallScreen ? "translateX(400px)" : "translateX(0px)"};
      padding-top: 50px;
    }

    .sidebar-toggler-small {
      display: block;
    }
  }
`;
