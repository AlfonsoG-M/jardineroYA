import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";

const AppRouter = () => {
  return (
    <Routes>
      {routes.map(({ id, path, Element }) => {
        <Route id={id} path={path} element={<Element />} />;
      })}
    </Routes>
  );
};

export default AppRouter;
