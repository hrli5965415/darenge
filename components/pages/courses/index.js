import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { nameToUrl } from '../../../utils/utility'

export const CoursesSection = ({courses}) => {
  return (
    <StyledCoursesSection>
        {courses.map((course)=>{
          return (
            <li key={course.courseName}>
              <Link href={`courses/${nameToUrl(course.courseName)}/${nameToUrl(course.chapters[0].chapterName)}`}>
                <a>{course.courseName}</a>
              </Link>
            </li>
          )
        })}
    </StyledCoursesSection>
  )
}


const StyledCoursesSection = styled.section`
  position: absolute;
  top: var(--navbar-height);
`