import { Navigate, Outlet } from "react-router";
import Navbar from "./Navbar";
import Container from "../components/Container";
import { useUser } from "reactfire";
import { routes } from "../routes";

type Props1 = {};

const Layout = ({}: Props1) => {
  // const navigate = useNavigate();
  const { status, data: user } = useUser();

  if (status === "loading") {
    return <GlobalLoader />;
  }

  if (status === "success" && !user) {
    // navigate is asynchronous, so it cause issue after component unmounts
    // navigate("/login");
    // replace so that, it doesn't create history entry in the back button
    console.warn("not logged in, redirecting to login");
    return <Navigate to={routes.login.path} replace />;
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

const GlobalLoader = () => {
  return <div>Loading...</div>;
};

export default Layout;
