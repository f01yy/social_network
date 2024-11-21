import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { routesConfig } from "shared/config/routesConfig/routesConfig"

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routesConfig.map((route) => <Route key={route.path} {...route} />)}
        </Routes>
      </Suspense>
  )
}

export default AppRouter