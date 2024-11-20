import { Outlet } from "react-router-dom"
import { useTheme } from "./theme/useTheme"
import classNames from "classnames"

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('layout', [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Outlet />
    </div>
  )
}

export default App