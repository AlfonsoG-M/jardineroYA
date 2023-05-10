import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";

const AppRouter = () => {
  return (
    <Routes>
      {routes.map(({ id, path, Element }) => {
        return <Route key={id} path={path} element={<Element />} />
      })}
    </Routes>
  );
};

export default AppRouter;
