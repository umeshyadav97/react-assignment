import React, { useState } from "react";
import AppRouter from "./router";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { defaultTheme } from "./themes/defaultTheme";
import { CookiesProvider } from "react-cookie";
import "./styles/global.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppLoader from "./components/Loader/AppLoader";
import { SizeContext } from "./components/sizeContext";

/**
 * @description Check if browser is Safar
 * @description It'll be usefull for web notifications
 */

function App() {
  const currentTheme = createTheme(defaultTheme);
  const [isMobile, setIsMobile] = useState(false);

  const toggleSize = () => {
    setIsMobile((prevIsMobile) => !prevIsMobile);
  };

  return (
    <CookiesProvider>
      <SizeContext.Provider value={{ toggleSize, isMobile }}>
        <ThemeProvider theme={currentTheme}>
          <AppLoader />
          <AppRouter />
          <ToastContainer />
        </ThemeProvider>
      </SizeContext.Provider>
    </CookiesProvider>
  );
}

export default App;
