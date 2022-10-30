import React, { Suspense, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import parse from "html-react-parser";
import { useRouter } from "next/router";
import { nameToUrl } from "../../../../utils/utility";
import { useSelector } from "react-redux";
import { Player } from "./player";
import Prism from "prismjs";
import { rawSnippet } from "../../../TestHighlight";
import { usePopupHook } from "../../../../hooks/usePopupHook";
import { usePlayer } from "../../../../hooks/usePlayer";
import { SyncButton } from "./SyncButton";

export const DocSection = ({ courseDocument }) => {
  const isSidebarOpen = useSelector((state) => state.doc.isSidebarOpen);

  const router = useRouter();
  const currentRoute = router.query.courseSlug[1];

  const chapter = courseDocument.chapters.find((chapter) => {
    return nameToUrl(chapter.chapterUrl) === currentRoute;
  });

  usePopupHook();

  useEffect(() => {
    Prism.highlightAll();
  });

  //{parse(chapter.chapterDoc)} -> parse html from mongoDb
  //<b className='popup-btn'><span className='popup'></span></b>
  return (
    <StyledDoc className={isSidebarOpen ? "" : "close"}>
      {/* <div className="doc-wrapper">
        <div className="info top">
          本文件僅作為影片的補充資料以及文字敘述，並不是正式的官方文檔，如果你想查閱比較詳細的資訊，你可以前往
          <a
            href="https://developer.mozilla.org/zh-TW/docs/Learn/HTML/Introduction_to_HTML"
            target="_blank"
            rel="noreferrer"
          >
            MDN
          </a>
          的官方網站。
        </div>
        <h1>什麼是HTML</h1>
        <ul>
          <li>
            <p>
              <span className="keyword">HTML</span>的全名叫做Hyper Text Markup
              Language，是一種用來編寫網頁的語言。
            </p>
          </li>
          <li>
            <p>
              不像c++，java或是python這些編程語言，
              <span className="keyword">HTML</span>
              是一種標記語言，是用來告訴瀏覽器網頁結構的語言。
            </p>
          </li>
        </ul>

        <h2>創建HTML文件</h2>
        <p>
          要寫一份HTML文件，首先在電腦上創建一個
          <b className="popup-btn">
            空白文件
            <span className="popup">
              編寫HTML時，最好是利用Visual Studio
              Code這類型的工具，但是你仍然可以在電腦上直接創建HTML文件，例如使用記事本(Windows用戶)或者TextEdit(Mac用戶)來編寫HTML代碼
            </span>
          </b>
          ，並將其命名為
          <b className="popup-btn">
            index.html
            <span className="popup">文件的名字不拘，但是結尾必須是.html</span>
          </b>
          ，接著在文件裡面輸入：
        </p>
        <pre data-language="html">
          <code className="language-html">&lt;p&gt;hellow world&lt;/p&gt;</code>
        </pre>
        <p>然後保存這份文件。</p>
        <p>
          接著在
          <b className="popup-btn">
            瀏覽器
            <span className="popup">
              你可以直接將文件拖到瀏覽器的分頁上，或者在文件上按下滑鼠右鍵，選擇Chrome來打開。
            </span>
          </b>
          上打開它。或者，利用VScode的
          <b className="popup-btn">
            local development server
            <span className="popup">要使用local development server，</span>
          </b>
          也可以。
        </p>
      </div> */}
      {parse(chapter["htmlDoc"], { trim: true })}
    </StyledDoc>
  );
};

const StyledDoc = styled.div`
  width: 100%;
  padding: 30px;
  padding-left: 350px;
  padding-bottom: 100px;
  background-color: var(--doc-section-background-color);
  position: absolute;
  top: var(--navbar-height);
  height: auto;
  transition: padding-left 0.15s;
  min-height: calc(100% - var(--navbar-height));

  &.close {
    padding-left: 30px;
  }

  @media (max-width: 1000px) {
    padding-left: 30px;
  }

  @media (max-width: 600px) {
    padding: 0px;
  }
`;
