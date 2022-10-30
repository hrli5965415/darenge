import React from "react";
import styled from "styled-components";

export const SyncButton = ({ syncFunc, seekTime }) => {
  return (
    <StyledSyncButton className="sync-btn" onClick={() => syncFunc()}>
      {seekTime ?? "跳轉至12:35"}
    </StyledSyncButton>
  );
};

const StyledSyncButton = styled.button`
  border: 2px solid var(--syncbtn-color);
  border-radius: 10px;
  background-color: transparent;
  color: #065fd4;
  font-size: 18px;
  cursor: pointer;
  padding: 5px 20px;
  transition: all 0.15s ease-in;
  color: var(--syncbtn-color);

  &:hover {
    transform: translateY(-3px);
    background-color: var(--syncbtn-color);
    color: white;
  }
`;
