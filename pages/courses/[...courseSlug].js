import React from 'react'
import { connectDB } from '../../db'
import { useRouter } from 'next/router';
import { Navbar } from '../../components/common/navbar';
import { nameToUrl, urlToName } from '../../utils/utility';
import { Sidebar } from '../../components/pages/courses/course/Sidebar';
import styled from 'styled-components';
import { DocSection } from '../../components/pages/courses/course/DocSection';
import { SidebarToggler } from '../../components/pages/courses/course/SidebarToggler';


export async function getStaticPaths() {


  const { db } = await connectDB()
  const coursesResult = await db.collection('collection1').find({}).toArray()

  let paths = [];

  for(let i=0; i<coursesResult.length; i++){
    for(let j=0; j<coursesResult[i].chapters.length; j++){
      paths.push(
        {
          params: {
            courseSlug: [
              nameToUrl(coursesResult[i].courseName), 
              nameToUrl(coursesResult[i].chapters[j].chapterName) 
            ]
          }
        }
      )
    }
  }



    return {
      paths,
      fallback: false, // can also be true or 'blocking'
    }
}
export async function getStaticProps({params}) {


  const { db } = await connectDB()
  const result = await db.collection('collection1').findOne({courseName: urlToName(params.courseSlug[0])})


    return {
      // Passed to the page component as props
      props: {
          courseDocument: {
            ...result,
            _id: result._id.toString(),
          }
      },
    }
}

export default function Course({courseDocument}) {


  return (
    <>
      <Navbar />
      <Sidebar courseDocument={courseDocument}/>
      <DocSection courseDocument={courseDocument}/>
      <SidebarToggler />
    </>
  )
}

