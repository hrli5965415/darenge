import { createSlice } from "@reduxjs/toolkit";
import { DARK_THEME, WHITE_THEME } from "../../constants/constant";

const initialState = {
  theme: WHITE_THEME,
  isMenubarOpenOnSmallScreen: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      if (state.theme === WHITE_THEME) {
        state.theme = DARK_THEME;
      } else if (state.theme === DARK_THEME) {
        state.theme = WHITE_THEME;
      } else {
        state.theme = WHITE_THEME;
      }
    },
    changeToWhite: (state) => {
      state.theme = WHITE_THEME;
    },
    changeToDark: (state) => {
      state.theme = DARK_THEME;
    },
    changeThemeWithPayload: (state, action) => {
      state.theme = action.payload;
    },
    toggleMenubarForSmallScreen: (state) => {
      if (state.isMenubarOpenOnSmallScreen === true) {
        state.isMenubarOpenOnSmallScreen = false;
      } else if (state.isMenubarOpenOnSmallScreen === false) {
        state.isMenubarOpenOnSmallScreen = true;
      }
    },
    closeMenubarForSmallScreen: (state) => {
      state.isMenubarOpenOnSmallScreen = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  toggleTheme,
  changeToDark,
  changeToWhite,
  loadFromLocalStorage,
  changeThemeWithPayload,
  toggleMenubarForSmallScreen,
  closeMenubarForSmallScreen,
} = appSlice.actions;

export default appSlice.reducer;
