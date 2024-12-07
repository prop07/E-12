import { NavLink, useNavigate } from "react-router";
import { ACTIONS, Context } from "../store";
import { useContext } from "react";
import NavButton from "../components/buttons/NavButton";
import Container from "../components/Container";
import { routes } from "../routes";

type Props = {};

const Navbar = ({}: Props) => {
  const navigate = useNavigate();
  const [, dispatch] = useContext(Context);

  const links = ["home", "account", "random"];

  const logout = () => {
    dispatch({
      type: ACTIONS.SET_TOKEN,
      token: null,
    });
    navigate("/login");
    return;
  };

  return (
    <Container>
      <div className="flex justify-between">
        <div className="flex gap-2">
          {links.map((r) => {
            const { path, name } = routes[r];
            return (
              <NavButton key={path}>
                <NavLink to={path}>{name}</NavLink>
              </NavButton>
            );
          })}
        </div>
        <NavButton>
          <button onClick={logout}>Logout</button>
        </NavButton>
      </div>
    </Container>
  );
};

export default Navbar;
