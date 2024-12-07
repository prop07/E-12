import { createBrowserRouter } from "react-router";
import Layout from "./layouts/Layout";
import NotFound from "./pages/NotFound";
import { routes } from "./routes";

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
    ],
  },
  {
    path: routes.login.path,
    element: routes.login.element,
  },
]);
