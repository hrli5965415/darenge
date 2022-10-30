import styled from "styled-components";
import { colorVar } from "../../../constants/theme";

export const Button = styled.button`
  background-color: transparent;
  border-radius: 5px;
  padding: 10px 40px;
  cursor: pointer;
  border: 2px solid;
  border-color: ${({ color }) => (color ? color : "black")};
  transition: background-color 0.15s ease-in, transform 0.15s ease-in,
    color 0.15s ease-in;
  color: var(--second-text-color);
  font-size: 16px;

  &:hover {
    background-color: ${({ color }) => (color ? color : "blue")};
    transform: translateY(-2px);
    color: white;
  }
`;
export const NavLink = styled.a`
  padding: 18px 25px;
  border-radius: 2px;
  height: 100%;
  transition: background-color 0.15s;
  cursor: pointer;
  transition: color 0.15s ease-in;
  color: ${({ isActive }) =>
    isActive ? "var(--main-text-color)" : "var(--third-text-color)"};
  border-bottom: ${({ isActive }) =>
    isActive ? "2px solid var(--nav-link-active-color)" : "none"};

  &:hover {
    color: var(--main-text-color);
    border-bottom: ${({ isActive }) =>
      isActive
        ? "2px solid var(--nav-link-active-hover-color)"
        : "2px solid var(--nav-link-active-color)"};
  }

  @media (max-width: 1000px) {
    padding: 18px 10px;
  }

  @media (max-width: 700px) {
    height: 50px;
    width: 100%;
    border-bottom: none;
    color: ${({ isActive }) =>
      isActive ? "var(--main-text-color)" : "var(--third-text-color)"};
    background-color: ${({ isActive }) =>
      isActive ? "var(--a-background-color)" : "none"};
    padding-left: 30px;

    &:hover {
      border-bottom: none;
      color: var(--main-text-color);
    }
  }
`;
