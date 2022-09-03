import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import parse from 'html-react-parser';
import { useRouter } from 'next/router';
import { nameToUrl } from '../../../../utils/utility';
import { useSelector } from 'react-redux';


export const DocSection = ({courseDocument}) => {

    const isSidebarOpen = useSelector((state)=>state.doc.isSidebarOpen)
    const [time, setTime] = useState();


    const router = useRouter()
    const currentRoute = router.query.courseSlug[1]

    const chapter = courseDocument.chapters.find((chapter)=>{
        return nameToUrl(chapter.chapterName) === currentRoute
      })


  return (
    <StyledDoc className={isSidebarOpen ? '' : 'close'}>
      <div className='doc-wrapper'>
        <button onClick={()=>setTime('50')}>setTime50</button>
        <button onClick={()=>setTime('100')}>setTime100</button>
        <iframe width="560" height="315" src={`https://www.youtube.com/embed/0G3_kG5FFfQ?start=${time}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
        {parse(chapter.chapterDoc)}
      </div>
    </StyledDoc>
  )
}


const StyledDoc = styled.div`
    width: 100%;
    padding: 30px;
    padding-left: 400px;
    background-color: var(--doc-section-background-color);
    position: absolute;
    top: var(--navbar-height);
    height: auto;
    transition: padding-left 0.15s;
    min-height: calc(100% - var(--navbar-height));
    

    &.close {
      padding-left: 30px;
    }
  
    .doc-wrapper {
      background-color: var(--doc-background-color);
      color: var(--main-text-color);
      padding: 20px 80px;
      border-radius: 3px;
      box-shadow: var(--box-shadow-around);
      height: auto;
    }

    h1 {
      color: var(--main-text-color);
    }

    h2:hover .hashtag {
      opacity: 1;
    }

    p {
      color: var(--doc-p-color);
    }


    .hashtag {
      opacity: 0;
      transition: opacity 0.15s;
    }

    .hashtag:hover {
      text-decoration: underline;
    }
`