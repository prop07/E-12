import { Outlet, useNavigate } from "react-router";
import Navbar from "./Navbar";
import { getToken } from "../utils";
import { useEffect } from "react";

type Props = {};

const Layout = ({}: Props) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getToken();

    if (!token) {
      navigate("/login");
      return;
    }
  }, []);

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
