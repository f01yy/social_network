import { Outlet } from "react-router-dom"
import ThemeProvider from "./theme/ThemeProvider"
import App from "./App"

const Layout = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  )
}

export default Layout