import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { loadFromLocalStorage } from '../../redux/slice/appSlice'
import { loadLocalToRedux } from '../../thunk/thunk'
import { convertThemeToObj } from '../../utils/utility'


export const ThemeLayout = ({children}) => {

    const theme = useSelector((state)=> state.app.theme)
    const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(loadLocalToRedux())
    },[])


  return (
    <ThemeProvider theme={convertThemeToObj(theme)}>
      <div className={theme}>
        {children}
      </div>
    </ThemeProvider>

  )
}
