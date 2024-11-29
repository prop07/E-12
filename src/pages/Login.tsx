import { FormEvent, useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import Input from "../components/form/Input";
import credentials from "../../credentials.json";
import { generateToken } from "../utils";
import { ACTIONS, Context } from "../store";
import Container from "../components/Container";

type Props = {};

const Login = ({}: Props) => {
  const navigate = useNavigate();
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    if (state.token) {
      navigate("/");
      return;
    }
  }, []);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as any);
    const data = Object.fromEntries(formData.entries());
    if (data.email && data.password) {
      try {
        const users = Object.values(credentials);
        const user = users.find((user) => user.email === data.email);
        console.log(user);
        if (user && user.password === data.password) {
          const token = generateToken();
          dispatch({
            type: ACTIONS.SET_TOKEN,
            token: token,
          });
          navigate("/");
        } else {
          window.alert("Invalid email or password!");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Container>
      <form method="post" onSubmit={onSubmit}>
        <div>Login</div>
        <Input name={"email"} type={"text"} placeholder={"Enter your email"} />
        <Input
          name={"password"}
          type={"password"}
          placeholder={"Enter your password"}
        />
        <button type="submit">Submit</button>
      </form>
    </Container>
  );
};

export default Login;
