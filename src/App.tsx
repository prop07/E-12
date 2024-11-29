import Layout from "./layouts/Layout";
import Account from "./pages/Account";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./pages/Login";
import { useContext, useEffect } from "react";
import { ACTIONS, Context } from "./store";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/account",
        element: <Account />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  const [, dispatch] = useContext(Context);

  useEffect(() => {
    const token = localStorage.getItem("token");
    dispatch({ type: ACTIONS.SET_TOKEN, token: token ?? null });
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
