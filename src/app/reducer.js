export const initialState = {
  theme: "dark",
  menuOpen: false,
};

export const reducer = (state, action) => {
  const { type, value } = action;

  switch (type) {
    case "setTheme":
      return { ...state, theme: value };
    case "toggleTheme": {
      const newThemeType = state.theme === "dark" ? "light" : "dark";
      return { ...state, theme: newThemeType };
    }
    case "toggleMenu": {
      return { ...state, menuOpen: !state.menuOpen };
    }
    default:
      throw new Error();
  }
};
