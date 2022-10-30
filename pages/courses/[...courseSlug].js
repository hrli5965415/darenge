import React from "react";
//import { connectDB } from "../../db";
import { useRouter } from "next/router";
import { Navbar } from "../../components/common/navbar";
import { nameToUrl, urlToName } from "../../utils/utility";
import { Sidebar } from "../../components/pages/courses/course/Sidebar";
import styled from "styled-components";
import { DocSection } from "../../components/pages/courses/course/DocSection";
import { SidebarToggler } from "../../components/pages/courses/course/SidebarToggler";
import { SidebarModal } from "../../components/common/SidebarModal";
import { useSelector } from "react-redux";
import { TWCollection } from "../../documentation/TWCollection";
import { CNCollection } from "../../documentation/CNCollection";

export async function getStaticPaths({ locales }) {
  //const { db } = await connectDB();
  //const courseResult = await db.collection("TW").find({}).toArray();

  const Collection = TWCollection;
  let paths = [];

  for (let i = 0; i < Collection.length; i++) {
    for (let j = 0; j < Collection[i].chapters.length; j++) {
      let pathItemWithoutLocale = {
        params: {
          courseSlug: [
            Collection[i].courseUrl,
            Collection[i].chapters[j].chapterUrl,
          ],
        },
      };
      paths.push({
        ...pathItemWithoutLocale,
        locale: "zh-TW",
      });
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
  //const { db } = await connectDB();
  // const result = await db
  //   .collection("TW")
  //   .findOne({ courseName: urlToName(params.courseSlug[0]) });

  let Collection = [];

  if (locale === "zh-CN") {
    Collection = CNCollection;
  } else {
    Collection = TWCollection;
  }
  const courseDocument = Collection.find(
    (course) => course["courseUrl"] === params["courseSlug"][0]
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

export default function Course({ courseDocument }) {
  const isSidebarOpenOnSmallScreen = useSelector(
    (state) => state.doc.isSidebarOpenOnSmallScreen
  );

  return (
    <>
      <Navbar />
      <Sidebar courseDocument={courseDocument} />
      <DocSection courseDocument={courseDocument} />
      <SidebarToggler />
      {isSidebarOpenOnSmallScreen && <SidebarModal />}
    </>
  );
}
