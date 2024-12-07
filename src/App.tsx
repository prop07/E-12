import { RouterProvider } from "react-router";
import { useContext, useEffect } from "react";
import { ACTIONS, Context } from "./store";
import { router } from "./router";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const auth = getAuth();
  const [, dispatch] = useContext(Context);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
    } else {
      console.log("User Logout");
    }
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    dispatch({ type: ACTIONS.SET_TOKEN, token: token ?? null });
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
