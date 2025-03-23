import { Route, Routes } from "react-router"
import { routesPath } from "../../shared/routes"

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={routesPath.index} element={<div>Main page</div>} />
      <Route path={routesPath.detail} element={<div>Detail news</div>} />
    </Routes>
  )
}