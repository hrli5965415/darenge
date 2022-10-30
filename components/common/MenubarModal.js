import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { toggleMenubarForSmallScreen } from "../../redux/slice/appSlice";

export const MenubarModal = () => {
  const dispatch = useDispatch();

  const modalClick = () => {
    dispatch(toggleMenubarForSmallScreen());
  };

  return <StyledMenubarModal onClick={modalClick}></StyledMenubarModal>;
};

const StyledMenubarModal = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  cursor: pointer;
`;
