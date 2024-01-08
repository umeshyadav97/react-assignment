import React from "react"
import AppRouter from "./router"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { defaultTheme } from "./themes/defaultTheme"
import { CookiesProvider } from "react-cookie"
import "./styles/global.scss"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import AppLoader from "./components/Loader/AppLoader"

/**
 * @description Check if browser is Safar
 * @description It'll be usefull for web notifications
 */

if (window.safari) {
  // eslint-disable-next-line no-console
  console.log("safari browser detected")
} else {
  // initializeFirebase();
}

function App() {
  const currentTheme = createTheme(defaultTheme)

  return (
    <CookiesProvider>
        <ThemeProvider theme={currentTheme}>
          <AppLoader />
          <AppRouter />
          <ToastContainer />
        </ThemeProvider>
    </CookiesProvider>
  )
}

export default App
