import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { ChapterGroup } from './ChapterGroup'

export const Sidebar = ({courseDocument}) => {

    const isSidebarOpen = useSelector((state)=>state.doc.isSidebarOpen)

    const fiterGroupName = (groupName, chapters) => {
        let groupList = chapters.filter((chapter)=>chapter.chapterGroup === groupName);
        return groupList.map((chapter)=>{
            return {
                chapterGroup: chapter.chapterGroup,
                chapterName: chapter.chapterName     
            }
        })
    }

    useEffect(()=>{
        const sidebar = document.getElementById('sidebar');
        const navbarHeight = document.getElementById('navbar').offsetHeight
        
        window.onscroll = (e) => {
            if(window.scrollY < navbarHeight){
                sidebar.style.transform = `translateY(-${window.scrollY}px)`
            }
        }
        return ()=>{ window.onscroll = null}
    },[])

  return (
    <StyledSidebar className={isSidebarOpen ? '' : 'close'} id='sidebar'>
        {courseDocument.chapterGroups.map((groupName)=>{
            return (
                <ChapterGroup 
                    groupName={groupName}
                    groupList={fiterGroupName(groupName, courseDocument.chapters)}
                    key={groupName}
                />
            )
        })}
    </StyledSidebar>
  )
}

const StyledSidebar = styled.aside`
    height: calc(100vh + var(--navbar-height));
    left: 0;
    width: var(--sidebar-width);
    font-size: 30px;
    position: fixed;
    z-index: 5;
    top: 0px;
    box-shadow: var(--box-shadow-around);
    background-color: var(--sidebar-background-color);
    transition: left 0.15s;
    padding-top: 100px;

    &.close {
        left: -400px
    }

    ul a {
        color: var(--sidebar-text-color);
    }


`
