import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { nameToUrl } from "../../../../utils/utility";
import rightChevron from "../../../../public/right-chevron.svg";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { WHITE_THEME } from "../../../../constants/constant";
import { toggleSidebarCheckboxItem } from "../../../../redux/slice/docSlice";
import { toggleLocalSideboxCheckboxItemThunk } from "../../../../thunk/thunk";

export const ChapterGroup = ({
  groupNameObj,
  groupList,
  sidebarCheckboxList,
  courseUrl,
}) => {
  const router = useRouter();
  const currentRoute = router.query.courseSlug[1];
  const [isChapterOpen, setIsChapterOpen] = useState(true);
  const appTheme = useSelector((state) => state.app.theme);
  const dispatch = useDispatch();

  return (
    <StyledChapterGroup
      arrowImg={rightChevron}
      isChapterOpen={isChapterOpen}
      appTheme={appTheme}
    >
      <div
        className="group-name"
        onClick={() => setIsChapterOpen(!isChapterOpen)}
      >
        <span className="group-emoji">{groupNameObj.groupEmoji}</span>
        <a>{groupNameObj.groupName}</a>
        <Image src={rightChevron} width={10} height={10} className="chevron" />
      </div>
      <ul className={`chapter-group ${isChapterOpen ? "open" : "close"}`}>
        {groupList.map((chapter) => {
          return (
            <li
              key={chapter.chapterUrl}
              className={`chapter-li 
            ${currentRoute === nameToUrl(chapter.chapterUrl) ? "active" : ""}
            `}
            >
              <span
                className="checkbox-wrapper"
                onClick={() => {
                  dispatch(
                    toggleLocalSideboxCheckboxItemThunk(
                      router.locale + courseUrl,
                      chapter.chapterUrl
                    )
                  );
                }}
              >
                <span
                  className={`checkbox ${
                    sidebarCheckboxList.includes(chapter.chapterUrl)
                      ? "checked"
                      : ""
                  }`}
                ></span>
              </span>

              <Link
                href={`/courses/${router.query.courseSlug[0]}/${nameToUrl(
                  chapter.chapterUrl
                )}`}
                scroll={false}
              >
                <a
                  className={`chapter 
                  }`}
                >
                  <span>{chapter.chapterName}</span>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </StyledChapterGroup>
  );
};

const StyledChapterGroup = styled.li`
  padding: 10px 0px;

  a:hover {
    text-decoration: none;
  }

  .group-name {
    cursor: pointer;
    padding: 0px 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-weight: 500;
    margin-bottom: 10px;
  }
  .group-name > a {
    flex: 1;
    color: var(--second-text-color);
    font-size: 22px;
  }

  .group-emoji {
    font-size: 20px;
    margin-right: 25px;
  }

  .chevron {
    transform: ${({ isChapterOpen }) =>
      isChapterOpen ? "rotate(-90deg)" : ""};
    transition: transform 0.15s;
    filter: ${({ appTheme }) =>
      appTheme === WHITE_THEME ? "none" : "invert(100%)"};
  }

  ul.chapter-group {
    overflow: hidden;
    transition: max-height 0.2s;
    padding-left: 0;
    margin: 5px auto;
  }

  ul.open {
    display: block;
  }
  ul.close {
    display: none;
  }

  .chapter-li {
    display: flex;
    flex-direction: row;
    padding-left: 15px;
    align-items: center;
    justify-content: flex-start;
    gap: 15px;
  }

  .checked.checked {
    background-color: #22c55e;
  }

  .checked.checked::before {
    background: url("/checkmark.svg");
    content: "";
    width: 12px;
    height: 12px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.8);
    position: absolute;
  }
  .checkbox {
    border: 1px solid var(--third-text-color);
    width: 17px;
    height: 17px;
    border-radius: 50%;
    align-self: center;
    display: inline-block;
    position: relative;
    transition: 0.08s transform;
  }

  .checkbox:hover {
    transform: scale(1.1);
    border: 1px solid var(--main-text-color);
  }

  .checkbox-wrapper {
    padding: 1px;
    cursor: pointer;
  }

  .chapter {
    padding: 6px 8px;
    cursor: pointer;
    display: inline-block;
    font-size: 17px;
    color: var(--third-text-color);
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .chapter:hover {
    color: var(--main-text-color);
  }
  .chapter-li.active {
    background-color: var(--a-background-color);
  }

  .chapter-li.active a {
    color: var(--main-text-color) !important;
  }
  .chapter-li.active .checkbox {
    border: 1px solid var(--main-text-color);
  }

  .duration {
    border-radius: 5px;
    background-color: var(--duration-background-color);
    padding: 5px;
    font-size: 11px;
  }
`;
