import { Form, redirect, useActionData } from "react-router";
import Input from "../components/form/Input";
import Container from "../components/Container";
import { ActionFunction } from "react-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

type Props = {};

const Login = ({}: Props) => {
  const data = useActionData();
  // const navigate = useNavigate();
  // const [state, dispatch] = useContext(Context);

  // useEffect(() => {
  //   if (state.token) {
  //     navigate("/");
  //     return;
  //   }
  // }, []);

  // const onSubmit = (e: FormEvent<HTMLFormElement>) => {
  //   const formData = new FormData(e.target as any);
  //   const data = Object.fromEntries(formData.entries());
  //   if (data.email && data.password) {
  //     try {
  //       const users = Object.values(credentials);
  //       const user = users.find((user) => user.email === data.email);
  //       console.log(user);
  //       if (user && user.password === data.password) {
  //         const token = generateToken();
  //         dispatch({
  //           type: ACTIONS.SET_TOKEN,
  //           token: token,
  //         });
  //         navigate("/");
  //       } else {
  //         window.alert("Invalid email or password!");
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // };

  return (
    <Container>
      <Form id="login" method="post">
        <div>Login</div>
        {/* <Input name="formId" type="text" placeholder="login" /> */}
        <Input name="email" type="text" placeholder="Enter your email" />
        <Input
          name="password"
          type="password"
          placeholder="Enter your password"
        />
        {data && <div className="text-danger">{data.message}</div>}
        <button type="submit">Submit</button>
      </Form>
    </Container>
  );
};

export default Login;

type UserData = {
  formId?: string;
  email: string;
  password: string;
};
export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const { formId, email, password } = Object.fromEntries(
    formData.entries()
  ) as UserData;
  if (formId && formId !== "login") {
    return redirect("/");
  }
  if (email && password) {
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return redirect("/");
    } catch (error: any) {
      // return { message: error.message, status: error.code };
      if (error.code === "auth/invalid-email") {
        return { message: "Email not found!", status: 400 };
      } else if (error.code === "auth/invalid-login-credentials") {
        return { message: "Email or password is incorrect!", status: 400 };
      }
      console.error({ message: error.message, status: error.code });
      return { message: "Something went wrong", status: 500 };
    }
  }
};
