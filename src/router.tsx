import { createBrowserRouter, redirect } from "react-router";
import Layout from "./layouts/Layout";
import NotFound from "./pages/NotFound";
import { routes } from "./routes";
import { action as loginAction } from "./pages/Login";
import { getAuth } from "firebase/auth";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: routes.home.element,
      },
      {
        path: routes.account.path,
        element: routes.account.element,
      },
      {
        path: "logout",
        action: logoutAction,
      },
    ],
  },
  {
    path: routes.login.path,
    element: routes.login.element,
    action: loginAction,
  },
]);

async function logoutAction() {
  const auth = getAuth();
  await auth.signOut();
  return redirect("/");
}
