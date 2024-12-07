import { Form, NavLink } from "react-router";
import NavButton from "../components/buttons/NavButton";
import Container from "../components/Container";
import { routes } from "../routes";
import { getAuth } from "firebase/auth";

type Props = {};

const Navbar = ({}: Props) => {
  // const navigate = useNavigate();
  // const [, dispatch] = useContext(Context);
  const auth = getAuth();

  const links = [
    routes.home,
    routes.account,
    // , routes.random
  ];

  const logout = async () => {
    await auth.signOut();
  };

  return (
    <Container>
      <div className="flex justify-between">
        <div className="flex gap-2">
          {links.map((route) => {
            if (!route) {
              throw new Error("Route not found");
            }
            return (
              <NavButton key={route.path}>
                <NavLink to={route.path}>{route.name}</NavLink>
              </NavButton>
            );
          })}
        </div>
        <button onClick={logout}>Logout</button>
        {/* <Form action="/logout" method="post">
          <button type="submit">Logout</button>
        </Form> */}
      </div>
    </Container>
  );
};

export default Navbar;
