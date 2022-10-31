import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {
  DARK_THEME,
  WHITE_THEME,
  ZH_CN,
  ZH_TW,
} from "../../../constants/constant";
import {
  changeToDark,
  changeToWhite,
  closeMenubarForSmallScreen,
  toggleMenubarForSmallScreen,
} from "../../../redux/slice/appSlice";
import { NavLink } from "../styleComponents/styleComponent";

export const MenubarSide = ({
  isActivePath,
  langConst,
  theme,
  currentLanguage,
  currentTheme,
  isMenubarOpenOnSmallScreen,
  redirectUrl,
}) => {
  const router = useRouter();
  const { pathname, asPath, query } = router;

  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <StyledMenubarSide isMenubarOpenOnSmallScreen={isMenubarOpenOnSmallScreen}>
      <div
        className="menubar-toggler"
        onClick={() => dispatch(closeMenubarForSmallScreen())}
      ></div>
      <div className="border"></div>
      <div className="nav-side">
        <Link href="/">
          <NavLink className="logo" isActive={isActivePath("/")}>
            {langConst.HOME_PAGE}
          </NavLink>
        </Link>
        <Link href="/courses">
          <NavLink isActive={isActivePath("/courses")}>
            {langConst.TUTORIAL}
          </NavLink>
        </Link>
        <Link href="/videos">
          <NavLink isActive={isActivePath("/videos")}>
            {langConst.VIDEOS}
          </NavLink>
        </Link>
      </div>
      <div className="toggler-section">
        <div className="toggler-wrapper">
          <div
            className="outside-toggler"
            //onClick={() => setIsLanguageOpen(!isLanguageOpen)}
          >
            <Image
              src="/language-icon.svg"
              width={20}
              height={20}
              alt="language-icon.svg"
              className={`language-icon ${
                theme === DARK_THEME ? "inverted" : ""
              }`}
            />
            {currentLanguage()}
            {/* <div
              className={`right-chevron ${
                theme === DARK_THEME ? "inverted" : ""
              }`}
            > */}
            {/* <Image
              src="/right-chevron.svg"
              width={15}
              height={15}
              alt="right-chevron.svg"
            /> */}
            {/* </div> */}
          </div>
          <div className={`inside-toggler-group`}>
            <div
              className={`inside-toggler `}
              onClick={() => {
                if (redirectUrl) {
                  router.push(redirectUrl, undefined, {
                    locale: ZH_TW,
                  });
                } else {
                  router.push({ pathname, query }, asPath, {
                    locale: ZH_TW,
                  });
                }
              }}
            >
              <Image
                src="/checkmark-thin.svg"
                width={17}
                height={17}
                alt="checkmark-thin"
                priority={true}
                className={`checkmark-thin ${
                  theme === DARK_THEME ? "inverted" : ""
                } ${router.locale === ZH_TW ? "checked" : ""}`}
              />
              繁體中文
            </div>
            <div
              className={`inside-toggler `}
              onClick={() => {
                if (redirectUrl) {
                  router.push(redirectUrl, undefined, {
                    locale: ZH_CN,
                  });
                } else {
                  router.push({ pathname, query }, asPath, {
                    locale: ZH_CN,
                  });
                }
              }}
            >
              <Image
                src="/checkmark-thin.svg"
                width={17}
                height={17}
                alt="checkmark-thin"
                priority={true}
                className={`checkmark-thin ${
                  theme === DARK_THEME ? "inverted" : ""
                } ${router.locale === ZH_CN ? "checked" : ""}`}
              />
              简体中文
            </div>
          </div>
        </div>
        <div className="toggler-wrapper">
          <div
            className="outside-toggler"
            // onClick={() => setIsThemeOpen(!isThemeOpen)}
          >
            <Image
              src={theme === DARK_THEME ? "/moon-white.png" : "/sun-dark.svg"}
              width={20}
              height={20}
              alt="language-icon.svg"
            />
            {currentTheme()}
            {/* <div
              className={`right-chevron ${
                theme === DARK_THEME ? "inverted" : ""
              }`}
            >
              <Image
                src="/right-chevron.svg"
                width={15}
                height={15}
                alt="right-chevron.svg"
              />
            </div> */}
          </div>
          <div className={`inside-toggler-group`}>
            <div
              className={`inside-toggler `}
              onClick={() => {
                dispatch(changeToWhite());
              }}
            >
              <Image
                src="/checkmark-thin.svg"
                width={17}
                height={17}
                alt="checkmark-thin"
                priority={true}
                className={`checkmark-thin ${
                  theme === DARK_THEME ? "inverted" : "checked"
                }`}
              />
              淺色主題
            </div>
            <div
              className={`inside-toggler `}
              onClick={() => {
                dispatch(changeToDark());
              }}
            >
              <Image
                src="/checkmark-thin.svg"
                width={17}
                height={17}
                alt="checkmark-thin"
                priority={true}
                className={`checkmark-thin ${
                  theme === DARK_THEME ? "inverted checked" : ""
                }`}
              />
              深色主題
            </div>
          </div>
        </div>
      </div>
    </StyledMenubarSide>
  );
};

const StyledMenubarSide = styled.aside`
  position: fixed;
  top: 0;
  width: 300px;
  height: 100vh;
  background-color: var(--sidebar-background-color);
  flex-direction: column;
  justify-content: start;
  padding-top: 30px;
  transition: right 0.15s;
  z-index: 15;
  right: ${({ isMenubarOpenOnSmallScreen }) =>
    isMenubarOpenOnSmallScreen ? "0px" : "-400px"};
  display: none;

  .menubar-toggler {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    background: url("/right-chevron.svg") no-repeat center/70%
      var(--icon-background-color);
    transform: scale(0.9);
    box-shadow: 0px 0px 5px black;
    margin-right: auto;
    margin-left: 20px;
    transition: transform 0.15s ease-in;
  }

  .menubar-toggler:hover {
    transform: scale(0.95);
  }

  .nav-side {
    flex-direction: column;
    width: 100%;
    margin-top: 10px;
    padding-bottom: 10px;
    border-bottom: var(--toggler-border-bottom);
    display: none;
    gap: 10px;
  }

  .toggler-section {
    flex-direction: column;
    gap: 10px;
    width: 100%;
    margin-top: 10px;
    display: none;
  }

  .toggler-wrapper {
    padding: 15px 0px;
    border-bottom: var(--toggler-border-bottom);
  }

  .outside-toggler {
    padding: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    gap: 10px;
    cursor: pointer;
    color: var(--navbar-text-color);
  }

  .right-chevron {
    margin-left: auto;
  }

  .inverted {
    filter: invert(100%);
  }

  .inside-toggler {
    padding: 15px;
    padding-left: 30px;
    cursor: pointer;
    color: var(--navbar-text-color);
    display: flex;
    flex-direction: row;
    gap: 15px;
  }

  .checkmark-thin {
    opacity: 0;
  }

  .checkmark-thin.checked {
    opacity: 1;
  }

  .inside-toggler-group {
    display: block;
  }

  @media (max-width: 700px) {
    display: block;
    .toggler-section {
      display: flex;
    }
    .nav-side {
      display: flex;
    }
  }
`;
