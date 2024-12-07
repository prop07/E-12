import { useContext } from "react";
import { Context } from "../store";
import Counter from "../components/Counter";

type Props = {};

const Home = ({}: Props) => {
  const [state] = useContext(Context);

  return (
    <div className="p-2 text-center">
      Welcome, <span className="text-primary">{state.token}</span>
      <Counter />
    </div>
  );
};

export default Home;
