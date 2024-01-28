import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#323232",
    },
    secondary: {
      main: "#323200",
    },
  },
  typography: {
    fontFamily: "",
    allVariants: {
      textTransform: "none",
    },
    h1: {
      fontSize: "2.75rem", // 44 px
      fontWeight: 700,
    },
    h2: {
      fontSize: "2.5rem", // 36 px
      fontWeight: 400,
    },
    h3: {
      fontSize: "1.75rem", // 28 px
      fontWeight: 600,
    },
    h4: {
      fontSize: "1.375rem", // 22 px
      fontWeight: 500,
    },
    h5: {
      fontSize: "1.2rem", // 15 px
      fontWeight: 500,
    },
    h6: {
      fontSize: "1rem", // 16 px
      fontWeight: 400,
    },
    body1: {
      fontSize: "1rem", // 16 px
      fontWeight: 400,
    },
    body2: {
      fontSize: "0.875rem", // 14px small
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: "0.75rem", // 12px Extra small
      fontWeight: 400,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none", // Prevent automatic capitalization
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "0",
          margin: "0",
        },
      },
    },
  },
});

export default theme;
