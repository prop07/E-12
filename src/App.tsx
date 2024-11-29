import Layout from "./layouts/Layout";
import Account from "./pages/Account";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="account" element={<Account />} />
        </Route>
        <Route path={"/login"} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
