import { AboutPage } from "pages/AboutPage"
import { RouteProps } from "react-router-dom"
import { MainPage } from "pages/MainPage"

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
}

export const RoutesPaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
}

export const routesConfig: RouteProps[] = [
  {
    path: RoutesPaths.main,
    element: <MainPage />,
  },
  {
    path: RoutesPaths.about,
    element: <AboutPage />,
  }
]