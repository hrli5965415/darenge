import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { toggleSidebarForSmallScreen } from "../../../../redux/slice/docSlice";
import { loadLocalSideboxCheckboxThunk } from "../../../../thunk/thunk";
import { Chapters } from "./Chapters";

export const Sidebar = ({ courseDocument }) => {
  const { isSidebarOpenOnSmallScreen, sidebarCheckboxList } = useSelector(
    (state) => state.doc
  );
  const dispatch = useDispatch();

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
    dispatch(loadLocalSideboxCheckboxThunk(courseDocument.courseID));
  }, []);

  return (
    <StyledSidebar
      id="sidebar"
      isSidebarOpenOnSmallScreen={isSidebarOpenOnSmallScreen}
    >
      <Chapters
        courseID={courseDocument.courseID}
        sidebarCheckboxList={sidebarCheckboxList}
        chapters={courseDocument.chapters}
      />
    </StyledSidebar>
  );
};

const StyledSidebar = styled.aside`
  height: calc(100vh + var(--navbar-height));
  left: 0px;
  width: var(--sidebar-width);
  font-size: 30px;
  position: fixed;
  z-index: 5;
  padding-top: 80px;
  box-shadow: var(--box-shadow-around);
  background-color: var(--sidebar-background-color);
  transition: left 0.15s;
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

  @media (max-width: 1200px) {
    & {
      z-index: 15;
      height: 100vh;
      top: 0;
      left: ${({ isSidebarOpenOnSmallScreen }) =>
        isSidebarOpenOnSmallScreen ? "0px" : "-400px"};
      transform: translateY(0px) !important;
      padding-top: 50px;
    }

    .sidebar-toggler-small {
      display: block;
    }
  }
`;
