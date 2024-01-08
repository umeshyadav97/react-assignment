// default app theme and colors
export const defaultTheme = {
  palette: {
    primary: {
      main: "#1C4980",
      mainGradient:
        "linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(241,249,246,1) 35%, #53389E 100%)",
    },
    secondary: {
      main: "#ffffff",
    },
    error: {
      main: "#B42318",
    },
    background: {
      main: "#FFFFFF",
      default: "#FFFFFF",
    },
    text: {
      main: "#111111",
      white: "#EEEEEE",
    },
  },

  typography: {
    fontFamily: "poppins",
    h1: {
      fontSize: 14,
      lineHeight: 12 / 12,
      fontWeight: 600,
    },
    h2: {
      fontSize: 12,
      lineHeight: 12 / 12,
      fontWeight: 500,
    },
    h3: {
      fontSize: 20,
      // lineHeight: 48 / 26,
      fontWeight: 600,
    },
    h4: {
      fontSize: 28,
      // lineHeight: 40 / 24,
      fontWeight: 500,
    },
    h5: {
      fontSize: 18,
      lineHeight: 32 / 20,
      fontWeight: 400,
    },
    h6: {
      fontSize: 13,
      // lineHeight: 24 / 18,
      fontWeight: 400,
    },
    h7: {
      fontSize: 34,
      lineHeight: 24 / 18,
      fontWeight: 600,
    },
    p1: {
      fontSize: 16,
      lineHeight: 24 / 15,
      fontWeight: 500,
    },
    p2: {
      fontSize: 16,
      lineHeight: 22 / 14,
      fontWeight: 400,
    },
    button: {
      fontSize: 14,
      lineHeight: 18 / 13,
      letterSpacing: 0.2,
      fontWeight: 500,
      textTransform: "unset",
    },
    c1: {
      fontSize: 13,
      lineHeight: 20 / 13,
      fontWeight: 500,
    },
    c2: {
      fontSize: 16,
      lineHeight: 17 / 12,
      fontWeight: 600,
    },
    label: {
      fontSize: 11,
      lineHeight: 15 / 11,
      fontWeight: 600,
    },
  },
  shadows: ["1", "2", "3", "4", "none"],
  overrides: {},
};
