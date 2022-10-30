import React from "react";
import { Navbar } from "../../components/common/navbar";
import { Sidebar } from "../../components/pages/courses/course/Sidebar";
import {
  VideosListSection,
  VideosSection,
} from "../../components/pages/videos";
import { YTinfos } from "../../videosInfo/YTInfos";

export async function getStaticProps({ locale }) {
  let Collection;
  // if (locale === "zh-CN") {
  //   Collection = CNCollection;
  // } else {
  //   Collection = TWCollection;
  // }

  Collection = YTinfos;

  return {
    // Passed to the page component as props
    props: {
      courses: [...Collection],
    },
  };
}

export default function Videos({ courses }) {
  return (
    <>
      <Navbar />
      <VideosListSection courses={courses} />
    </>
  );
}
