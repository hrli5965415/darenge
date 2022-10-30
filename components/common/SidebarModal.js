import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { toggleSidebarForSmallScreen } from "../../redux/slice/docSlice";

export const SidebarModal = () => {
  const dispatch = useDispatch();

  const modalClick = () => {
    dispatch(toggleSidebarForSmallScreen());
  };

  return <StyledSidebarModal onClick={modalClick}></StyledSidebarModal>;
};

const StyledSidebarModal = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 14;
  cursor: pointer;
`;
