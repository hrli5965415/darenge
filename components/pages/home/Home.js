import React from 'react'
import styled from 'styled-components'
import { Button, H1, H2 } from '../../common/styleComponents/styleComponent'

export const HomeComponent = () => {
  return (
    <StyledHomeComponent>
        <section className='top-section'>
            <div className='top-section-left'>
                <h1>輕鬆學程式</h1>
                <h2>這裡是一個可以讓你學習網頁技術的地方</h2>
                <div className='button-group'>
                    <Button color='orange'>公開課程</Button>
                    <Button color='green'>進階課程</Button>
                </div>
            </div>
            <div className='top-section-right'>
                top seciton right
            </div>
        </section>
    </StyledHomeComponent>
  )
}

const StyledHomeComponent = styled.div`


    background-color: var(--main-background-color); 
    color: var(--main-text-color);
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 50px 80px;
    position: absolute;
    top: calc(var(--navbar-height));
    height: calc(var(100vh - var(--navbar-height)));


    .top-section{
        display: flex;
        width: 100%;
        height: 100%;
        gap: 20px;
    }
    .top-section-left {
        border: 2px yellow solid;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;

    }
    .top-section-right {
        border: 2px yellow solid;
        width: 100%;
        height: 100%;
    }


`

