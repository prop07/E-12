import { RouterProvider } from "react-router";
import { router } from "./router";

function App() {
  // const auth = getAuth();
  // const [, dispatch] = useContext(Context);

  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     const uid = user.uid;
  //     console.log(uid);
  //   } else {
  //     // console.log("User Logout");
  //   }
  // });

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   dispatch({ type: ACTIONS.SET_TOKEN, token: token ?? null });
  // }, []);

  return <RouterProvider router={router} />;
}

export default App;
