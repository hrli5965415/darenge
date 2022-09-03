import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { nameToUrl } from '../../../../utils/utility'
import rightChevron from '../../../../public/right-chevron.svg'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { WHITE_THEME } from '../../../../constants/constant'


export const ChapterGroup = ({groupName, groupList}) => {

    const router = useRouter()
    const currentRoute = router.query.courseSlug[1]
    const [isChapterOpen, setIsChapterOpen] = useState(true);
    const appTheme = useSelector((state)=>state.app.theme)

  return (
    <StyledChapterGroup arrowImg={rightChevron} isChapterOpen={isChapterOpen} appTheme={appTheme}>
            <div className='group-name' onClick={()=>setIsChapterOpen(!isChapterOpen)}>
                <a>{groupName}</a>
                <Image 
                    src={rightChevron}
                    width={10}
                    height={10}
                    className='chevron'
                />
            </div>
            <ul className={`chapter-group ${isChapterOpen ? 'open' :'close'}`}>
                {groupList.map((chapter)=>{
                    return (
                        <li key={chapter.chapterName} >
                            <Link href={`/courses/${router.query.courseSlug[0]}/${nameToUrl(chapter.chapterName)}`} scroll={false}>
                                <a className={`chapter ${currentRoute === nameToUrl(chapter.chapterName) ? 'active': ''}`}>{chapter.chapterName}</a>
                            </Link>
                        </li>
                    )
                })}
            </ul>
    </StyledChapterGroup>
  )
}


const StyledChapterGroup = styled.li`

    border-top: 1px solid rgba(40,40,40,0.15);
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
    }
    .group-name > a {
        color: var(--main-text-color);
        font-size: 24px;
    }

    .chevron {
        transform: ${({isChapterOpen})=>isChapterOpen ? 'rotate(-90deg)' : ''};
        transition: transform 0.15s;
        filter: ${({appTheme}) => appTheme === WHITE_THEME ? 'none' : 'invert(100%)'};
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
    
    .chapter {
        padding: 8px 40px;
        cursor: pointer;
        display: inline-block;
        width: 100%;
        color: var(--main-text-color);
        font-size: 17px;
    }

    .chapter:hover {
        background-color: rgba(40,40,40,0.15);
    }
    .chapter.active {
        background-color: rgba(40,40,40,0.15);
    }

`