import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isSidebarOpen: true
}


export const docSlice = createSlice({
    name: "doc",
    initialState,
    reducers: {
        toggleSidebar: (state)=> {
            if(state.isSidebarOpen === true){
                state.isSidebarOpen = false
            } else if (state.isSidebarOpen === false) {
                state.isSidebarOpen = true
            }
        }
    }
})


export const {toggleSidebar} = docSlice.actions

export default docSlice.reducer