import { Link, Route, Routes } from "react-router-dom"
import { useTheme } from "./providers/ThemeProvider"
import classNames from "classnames"
import { Suspense } from "react"
import { MainPage } from "../pages/MainPage"
import { AboutPage } from "../pages/AboutPage"

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App