import { Link, useNavigate } from "react-router";
import { ACTIONS, Context } from "../store";
import { useContext } from "react";

type Props = {};

const Navbar = ({}: Props) => {
  const navigate = useNavigate();
  const [, dispatch] = useContext(Context);

  const logout = () => {
    dispatch({
      type: ACTIONS.SET_TOKEN,
      token: null,
    });
    navigate("/login");
    return;
  };

  return (
    <div className="flex justify-between">
      <div className="flex gap-2">
        <Link className="px-2 py-1" to={"/"}>
          Home
        </Link>
        <Link className="px-2 py-1" to={"/account"}>
          Account
        </Link>
        <Link className="px-2 py-1" to={"/login"}>
          Login
        </Link>
        <Link className="px-2 py-1" to={"/s"}>
          Random
        </Link>
      </div>
      <button className="px-2 py-1" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default Navbar;
