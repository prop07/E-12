import { ReactNode } from "react";
import Account from "./pages/Account";
import Home from "./pages/Home";
import Login from "./pages/Login";

export const routes: {
  [name: string]: {
    path: string,
    name: string,
    element: ReactNode,
  }
} = {
  home: {
    path: "/",
    name: "Home",
    element: <Home />,
  },
  account: {
    path: "/account",
    name: "Account",
    element: <Account />,
  },
  random: {
    path: "/r",
    name: "Random",
    element: <></>,
  },
  login: {
    path: "/login",
    name: "Login",
    element: <Login />
  }
};