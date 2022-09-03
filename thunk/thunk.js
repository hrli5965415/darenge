import { changeThemeWithPayload, toggleTheme } from "../redux/slice/appSlice"


export const toggleThemeThunk = () => {
    return (dispatch, getState) => {  
        dispatch(toggleTheme())
        const state = getState();
        localStorage.setItem('theme', state.app.theme)
    }
}

export const loadLocalToRedux = () => {
    return (dispatch) => {
        const theme = localStorage.getItem('theme')
        if(theme == null){
            return;
        }else{
            dispatch(changeThemeWithPayload(theme))
        }
    }
}