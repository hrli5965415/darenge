import { whiteTheme, darkTheme } from "../constants/theme";

export const convertThemeToObj = (theme) => {
  if (theme === "dark") {
    return darkTheme;
  } else if (theme === "white") {
    return whiteTheme;
  } else {
    return darkTheme;
  }
};

export const nameToUrl = (name) => {
  return name.toString().toLowerCase().replace(/\s/g, "-");
};

export const urlToName = (url) => {
  var splitStr = url.toLowerCase().split("-");
  for (var i = 0; i < splitStr.length; i++) {
    // You do not need to check if i is larger than splitStr length, as your for does that for you
    // Assign it back to the array
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  // Directly return the joined string
  return splitStr.join(" ");
};
