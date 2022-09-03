import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import Image from 'next/image'
import moon from '../../../public/moon.svg'
import sun from '../../../public/sun.svg'
import { useDispatch, useSelector } from 'react-redux'
import { toggleThemeThunk } from '../../../thunk/thunk'
import { useCheckActivePath } from '../../../hooks/useCheckActivePath'
import { NavLink } from '../styleComponents/styleComponent'
import { WHITE_THEME } from '../../../constants/constant'

export const Navbar = () => {

  const dispatch = useDispatch()
  const theme = useSelector((state)=> state.app.theme)
  const {isActivePath} = useCheckActivePath()


  return (
    <NavbarStyle id='navbar'>
        <Link href='/'>
          <a className='logo'>logo</a>
        </Link>
        <nav>
            <Link href="/courses">
                <NavLink isActive={isActivePath('courses')}>課程</NavLink>
            </Link>
        </nav>
        <span className='moon' onClick={()=>{dispatch(toggleThemeThunk())}}>
          {
            theme === WHITE_THEME      
              ? <Image 
                src={moon}
                width={30}
                height={30}    
                />
              : <Image 
                src={sun}
                width={30}
                height={30}    
            />
        }
        </span>
      
    </NavbarStyle>
  )
}

const NavbarStyle = styled.div`
    padding: 10px;
    background-color: var(--navbar-color);
    color: var(--navbar-text-color);
    display: flex;
    align-items: center;
    box-shadow: var(--box-shadow-around);
    position: absolute;
    height: var(--navbar-height);
    width: 100%;
    z-index: 10;

    .logo {
      flex:0;
      margin-left: 20px;
    }
    nav {
      margin-left: 20px;
      flex: 1;
      margin-left: 50px;
    }
    .moon {
      margin-right: 20px;
      cursor: pointer; 
    }

`
