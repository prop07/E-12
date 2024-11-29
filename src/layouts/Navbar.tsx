import { Link, useNavigate } from "react-router";

type Props = {};

const Navbar = ({}: Props) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    return;
  };

  return (
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/account"}>Account</Link>
      <Link to={"/login"}>Login</Link>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Navbar;
