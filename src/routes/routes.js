import Home from "../components/page/home/Home";
import Login from "../components/page/login/Login";

export let routes = [
  {
    id: "home",
    path: "/",
    Element: Home,
  },
  {
    id: "login",
    path: "/login",
    Element: Login
  }
];
