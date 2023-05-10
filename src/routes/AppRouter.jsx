import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import Navbar from "../components/layout/navbar/Navbar";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Navbar />}>
        {routes.map(({ id, path, Element }) => {
          return <Route key={id} path={path} element={<Element />} />;
        })}
      </Route>
    </Routes>
  );
};

export default AppRouter;
