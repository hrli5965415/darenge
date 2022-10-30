import { createSlice } from "@reduxjs/toolkit";
import { CLOUDFRONT, IXIGUA } from "../../constants/constant";

const initialState = {
  isSidebarOpen: true,
  isSidebarOpenOnSmallScreen: false,
  videoSource: IXIGUA,
  videoRef: {},
  sidebarCheckboxList: [],
};

export const docSlice = createSlice({
  name: "doc",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      if (state.isSidebarOpen === true) {
        state.isSidebarOpen = false;
      } else if (state.isSidebarOpen === false) {
        state.isSidebarOpen = true;
      }
    },
    toggleSidebarForSmallScreen: (state) => {
      if (state.isSidebarOpenOnSmallScreen === true) {
        state.isSidebarOpenOnSmallScreen = false;
      } else if (state.isSidebarOpenOnSmallScreen === false) {
        state.isSidebarOpenOnSmallScreen = true;
      }
    },
    closeSidebarForSmallScreen: (state) => {
      state.isSidebarOpenOnSmallScreen = false;
    },
    changeVideoSource: (state, action) => {
      state.videoSource = action.payload;
    },
    loadSidebarCheckbox: (state, action) => {
      state.sidebarCheckboxList = action.payload;
    },
    toggleSidebarCheckboxItem: (state, action) => {
      if (state.sidebarCheckboxList.includes(action.payload)) {
        state.sidebarCheckboxList = state.sidebarCheckboxList.filter((item) => {
          return item !== action.payload;
        });
      } else {
        state.sidebarCheckboxList.push(action.payload);
      }
    },
    changeVideoRef: (state, action) => {
      state.videoRef = action.payload;
    },
  },
});

export const {
  toggleSidebar,
  toggleSidebarForSmallScreen,
  changeVideoSource,
  loadSidebarCheckbox,
  toggleSidebarCheckboxItem,
  changeVideoRef,
  closeSidebarForSmallScreen,
} = docSlice.actions;

export default docSlice.reducer;
