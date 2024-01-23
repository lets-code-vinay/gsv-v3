import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#323232",
    },
    secondary: {
      main: "red",
    },
  },
  typography: {
    fontFamily: "",
    allVariants: {
      textTransform: "none",
    },
  },
});
