import { changeThemeWithPayload, toggleTheme } from "../redux/slice/appSlice";
import {
  loadSidebarCheckbox,
  toggleSidebarCheckboxItem,
} from "../redux/slice/docSlice";

export const toggleThemeThunk = () => {
  return (dispatch, getState) => {
    dispatch(toggleTheme());
    const state = getState();
    localStorage.setItem("theme", state.app.theme);
  };
};

export const loadLocalToRedux = () => {
  return (dispatch) => {
    const theme = localStorage.getItem("theme");
    if (theme == null) {
      return;
    } else {
      dispatch(changeThemeWithPayload(theme));
    }
  };
};

export const loadLocalSideboxCheckboxThunk = (courseID) => {
  return (dispatch) => {
    const courseArray = localStorage.getItem(courseID) ?? "[]";
    dispatch(loadSidebarCheckbox(JSON.parse(courseArray)));
  };
};

export const toggleLocalSideboxCheckboxItemThunk = (courseID, chapterName) => {
  return (dispatch, getState) => {
    dispatch(toggleSidebarCheckboxItem(chapterName));
    const state = getState();
    if (Array.isArray(state.doc.sidebarCheckboxList)) {
      localStorage.setItem(
        courseID,
        JSON.stringify(state.doc.sidebarCheckboxList)
      );
    }
  };
};
