import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { toggleSidebar } from "../../../../redux/slice/docSlice";
import rightChevron from "../../../../public/right-chevron.svg";

export const SidebarToggler = () => {
  const isSidebarOpen = useSelector((state) => state.doc.isSidebarOpen);
  const dispatch = useDispatch();

  return (
    <StyledSidebarToggler
      onClick={() => {
        dispatch(toggleSidebar());
      }}
      className={isSidebarOpen ? "" : "close"}
    >
      <Image
        src={rightChevron}
        width={20}
        height={20}
        alt={"chevron"}
        className={`chevron ${isSidebarOpen ? "chevron-left" : ""}`}
      />
    </StyledSidebarToggler>
  );
};

const StyledSidebarToggler = styled.div`
  position: fixed;
  left: 320px;
  bottom: 40px;
  z-index: 10;
  background-color: var(--sidebar-toggler-background-color);
  box-shadow: var(--box-shadow-around);
  width: 40px;
  height: 40px;
  border-radius: 500%;
  cursor: pointer;
  transition: left 0.15s;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: rgb(230, 230, 230);
  }

  &.close {
    left: 10px;
  }

  .chevron {
  }

  .chevron-left {
    transform: rotateY(180deg);
  }

  @media (max-width: 1000px) {
    & {
      display: none;
    }
  }
`;
