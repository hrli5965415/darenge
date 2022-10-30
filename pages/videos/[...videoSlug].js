import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import { Navbar } from "../../components/common/navbar";
import { SidebarModal } from "../../components/common/SidebarModal";
import { Sidebar } from "../../components/pages/videos/video/Sidebar";
import { SidebarToggler } from "../../components/pages/videos/video/SidebarToggler";
import { VideoSection } from "../../components/pages/videos/video/VideoSection";
import { IXInfos } from "../../videosInfo/IXInfos";

import { YTinfos } from "../../videosInfo/YTInfos";

export async function getStaticPaths({ locales }) {
  let paths = [];
  let Collection = [];
  Collection = YTinfos;

  for (let i = 0; i < Collection.length; i++) {
    for (let j = 0; j < Collection[i].chapters.length; j++) {
      let pathItemWithoutLocale = {
        params: {
          videoSlug: [
            Collection[i].courseUrl,
            Collection[i].chapters[j].chapterUrl,
          ],
        },
      };
      paths.push({
        ...pathItemWithoutLocale,
        locale: "zh-TW",
      });
    }
  }

  Collection = IXInfos;

  for (let i = 0; i < Collection.length; i++) {
    for (let j = 0; j < Collection[i].chapters.length; j++) {
      let pathItemWithoutLocale = {
        params: {
          videoSlug: [
            Collection[i].courseUrl,
            Collection[i].chapters[j].chapterUrl,
          ],
        },
      };
      paths.push({
        ...pathItemWithoutLocale,
        locale: "zh-CN",
      });
    }
  }

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps({ params, locale }) {
  let Collection = [];

  if (locale === "zh-CN") {
    Collection = IXInfos;
  } else {
    Collection = YTinfos;
  }
  const courseDocument = Collection.find(
    (course) => course["courseUrl"] === params["videoSlug"][0]
  );

  return {
    // Passed to the page component as props
    props: {
      courseDocument: {
        ...courseDocument,
      },
    },
  };
}

export default function VideoPage({ courseDocument }) {
  const isSidebarOpenOnSmallScreen = useSelector(
    (state) => state.doc.isSidebarOpenOnSmallScreen
  );

  const redirectUrl = courseDocument.redirectUrl;

  return (
    <>
      <Navbar redirectUrl={redirectUrl} />
      <Sidebar courseDocument={courseDocument} />
      <VideoSection courseDocument={courseDocument} />
      {isSidebarOpenOnSmallScreen && <SidebarModal />}
    </>
  );
}
