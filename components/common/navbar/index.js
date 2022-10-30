import Link from "next/link";
import React, { useEffect, useState } from "react";
import styled, { useTheme } from "styled-components";
import Image from "next/image";
import moon from "../../../public/moon.svg";
import sun from "../../../public/sun.svg";
import simplified from "../../../public/simplified.svg";
import traditional from "../../../public/traditional.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleThemeThunk } from "../../../thunk/thunk";
import { useCheckActivePath } from "../../../hooks/useCheckActivePath";
import { NavLink } from "../styleComponents/styleComponent";
import {
  DARK_THEME,
  WHITE_THEME,
  ZH_CN,
  ZH_TW,
} from "../../../constants/constant";
import { useRouter } from "next/router";
import { toggleSidebarForSmallScreen } from "../../../redux/slice/docSlice";
import { useTranslationRouter } from "../../../hooks/useTranslationRouter";
import { darkTheme } from "../../../constants/theme";
import {
  changeToDark,
  changeToWhite,
  toggleMenubarForSmallScreen,
} from "../../../redux/slice/appSlice";
import { SidebarModal } from "../SidebarModal";
import { MenubarModal } from "../MenubarModal";
import { MenubarSide } from "./MenubarSide";

export const Navbar = ({ redirectUrl }) => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.app.theme);
  const isMenubarOpenOnSmallScreen = useSelector(
    (state) => state.app.isMenubarOpenOnSmallScreen
  );

  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState();

  const { isActivePath } = useCheckActivePath();

  const { router, langConst } = useTranslationRouter();
  const { pathname, asPath, query } = router;

  const reverseLocale = () => {
    if (router.locale === ZH_TW) {
      return ZH_CN;
    } else if (router.locale === ZH_CN) {
      return ZH_TW;
    }
  };
  const currentLanguage = () => {
    if (router.locale === ZH_TW) {
      return "語言: 繁體中文";
    } else if (router.locale === ZH_CN) {
      return "语言: 简体中文";
    }
  };

  const currentTheme = () => {
    if (theme === DARK_THEME && router.locale === ZH_TW) {
      return "主題色: 深色";
    } else if (theme === WHITE_THEME && router.locale === ZH_TW) {
      return "主題色: 淺色";
    } else if (theme === WHITE_THEME && router.locale === ZH_CN) {
      return "主题色: 浅色";
    } else if (theme === DARK_THEME && router.locale === ZH_CN) {
      return "主题色: 深色";
    }
  };

  useEffect(() => {
    const languageIcon = document.querySelector(".languages");
    const myFunc = (e) => {
      if (languageIcon.contains(e.target)) {
        return;
      } else {
        setIsLanguageDropdownOpen(false);
      }
    };

    document.addEventListener("click", myFunc);

    return () => document.removeEventListener("click", myFunc);
  }, []);

  return (
    <>
      <NavbarStyle
        id="navbar"
        isMenubarOpenOnSmallScreen={isMenubarOpenOnSmallScreen}
      >
        {(router.asPath.includes("/courses/") ||
          router.asPath.includes("/videos/")) && (
          <div
            className={`sidebar-toggler-in-navbar ${
              theme === DARK_THEME ? "dark" : ""
            }`}
            onClick={() => dispatch(toggleSidebarForSmallScreen())}
          ></div>
        )}
        <div className="wrapper">
          <nav>
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
          </nav>
          <div className="toggler-wrapper">
            <span className="languages">
              <Image
                src="/language-icon.svg"
                width={24}
                height={24}
                alt="language-icon.svg"
                className={`language-icon ${
                  theme === DARK_THEME ? "inverted" : ""
                }`}
                onClick={() =>
                  setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
                }
              />
              <div
                className={`languages-dropdown ${
                  isLanguageDropdownOpen ? "dropdown-open" : ""
                }`}
              >
                <div
                  className="languages-dropdown-item"
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
                    className={`checkmark-thin ${
                      theme === DARK_THEME ? "inverted" : ""
                    } ${router.locale === ZH_TW ? "checked" : ""}`}
                  />
                  繁體中文
                </div>
                <div
                  className="languages-dropdown-item"
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
                    className={`checkmark-thin ${
                      theme === DARK_THEME ? "inverted" : ""
                    } ${router.locale === ZH_CN ? "checked" : ""}`}
                  />
                  简体中文
                </div>
              </div>
            </span>

            <span
              className={`theme ${theme}`}
              onClick={() => {
                dispatch(toggleThemeThunk());
              }}
            >
              <div className={`theme-toggler ${theme}`}>
                {theme === WHITE_THEME ? (
                  <Image src={sun} width={30} height={30} alt="white" />
                ) : (
                  <Image src={moon} width={30} height={30} alt="dark" />
                )}
              </div>
            </span>
          </div>
        </div>

        <div
          className={`menubar-toggler-in-navbar ${
            theme === DARK_THEME ? "dark" : ""
          }`}
          onClick={() => dispatch(toggleMenubarForSmallScreen())}
        ></div>
      </NavbarStyle>
      <MenubarSide
        isActivePath={isActivePath}
        langConst={langConst}
        theme={theme}
        currentLanguage={currentLanguage}
        currentTheme={currentTheme}
        isMenubarOpenOnSmallScreen={isMenubarOpenOnSmallScreen}
        redirectUrl={redirectUrl}
      />
      {isMenubarOpenOnSmallScreen && <MenubarModal />}
    </>
  );
};

const NavbarStyle = styled.div`
  padding: 0px 10px;
  background-color: var(--navbar-color);
  color: var(--navbar-text-color);
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: var(--box-shadow-around);
  position: absolute;
  height: var(--navbar-height);
  width: 100%;
  z-index: 6;

  .wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .toggler-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 30px;
  }

  nav {
    display: flex;
    flex-direction: row;
    gap: 40px;
    margin-left: 35px;
    height: 100%;
  }

  .sidebar-toggler-in-navbar {
    width: 35px;
    height: 35px;
    background-color: lightgray;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    background: center/90% url("/hamburger-menu.svg") no-repeat;
  }

  .sidebar-toggler-in-navbar.dark {
    filter: invert(85%);
  }

  .menubar-toggler-in-navbar {
    width: 35px;
    height: 35px;
    margin-left: auto;

    border-radius: 50%;
    cursor: pointer;
    display: none;
    background: center/80% url("/three-dot.svg") no-repeat;
  }

  .menubar-toggler-in-navbar.dark {
    filter: invert(85%);
  }

  .languages {
    margin-right: 20px;
    position: relative;
  }

  .languages .inverted {
    filter: invert(100%);
  }

  .language-icon {
    cursor: pointer;
  }
  .languages-dropdown {
    width: 120px;
    height: 80px;
    border-radius: 8px;
    position: absolute;
    top: calc(100% + 5px);
    right: 50%;
    transform: translateX(50%);
    background-color: var(--languages-dropdown-background-color);
    box-shadow: var(--languages-dropdown-box-shadow);
    display: none;
  }

  .dropdown-open {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  .languages-dropdown-item {
    width: 100%;
    text-align: center;
    cursor: pointer;
    padding: 5px;
    color: var(--main-text-color);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 7px;
  }

  .checkmark-thin {
    opacity: 0;
  }

  .checkmark-thin.checked {
    opacity: 1;
  }

  .theme {
    border: var(--toggler-border);
    background-color: var(--toggler-background-color);
    width: 55px;
    height: 27px;
    border-radius: 20px;
    padding: 0 3px;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    cursor: pointer;
  }

  .theme-toggler {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    transition: left 0.2s ease;
    position: absolute;
    background-color: var(--toggler-color);
  }
  .theme-toggler > * {
    filter: var(--theme-toggler-filter);
  }

  .theme-toggler.white-theme {
    left: 3px;
    padding: 3px;
  }

  .theme-toggler.dark-theme {
    left: calc(100% - 25px);
    padding: 3px;
  }

  .moon {
    margin-right: 20px;
    cursor: pointer;
  }

  @media (max-width: 1000px) {
    .sidebar-toggler-in-navbar {
      display: block;
    }
    nav {
      margin-left: 10px;
      gap: 20px;
    }
  }
  @media (max-width: 700px) {
    .wrapper {
      display: none;
    }
    .menubar-toggler-in-navbar {
      display: block;
    }
  }
`;
