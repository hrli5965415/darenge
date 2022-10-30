import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { Navbar } from "../../components/common/navbar";
import { CoursesSection } from "../../components/pages/courses";
import { CNCollection } from "../../documentation/CNCollection";
import { TWCollection } from "../../documentation/TWCollection";
//import { connectDB } from "../../db";
import { nameToUrl } from "../../utils/utility";

export async function getStaticProps({ locale }) {
  let Collection;
  if (locale === "zh-CN") {
    Collection = CNCollection;
  } else {
    Collection = TWCollection;
  }

  return {
    // Passed to the page component as props
    props: {
      courses: [...Collection],
    },
  };
}

export default function Courses({ courses }) {
  return (
    <>
      <Navbar />
      <CoursesSection courses={courses} />
    </>
  );
}
