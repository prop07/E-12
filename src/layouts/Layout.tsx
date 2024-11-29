import { Outlet, useNavigate } from "react-router";
import Navbar from "./Navbar";
import { useContext, useEffect } from "react";
import { Context } from "../store";
import Container from "../components/Container";

type Props1 = {};

const Layout = ({}: Props1) => {
  const navigate = useNavigate();
  const [state] = useContext(Context);

  useEffect(() => {
    if (state.token === null) {
      navigate("/login");
    }
  }, [state.token]);

  if (state.token === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};

export default Layout;
