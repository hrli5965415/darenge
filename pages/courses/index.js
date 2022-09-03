import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { Navbar } from '../../components/common/navbar'
import { CoursesSection } from '../../components/pages/courses'
import { connectDB } from '../../db'
import { nameToUrl } from '../../utils/utility'


export async function getStaticProps() {

  const { db } = await connectDB()
  const coursesResult = await db.collection('collection1').find({}).toArray()
  console.log(coursesResult);
  const courses = coursesResult.map((course)=>{
    return {
      ...course,
      _id: course._id.toString(),
    }
  })


    return {
      // Passed to the page component as props
      props: {
          courses: [
            ...courses,
          ]
      },
    }
  }


export default function Courses({courses}) {
  return (
    <>
        <Navbar />
        <CoursesSection courses={courses}/>
    </>
  )
}

