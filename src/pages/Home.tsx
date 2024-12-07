// import Counter from "../components/Counter";
import { useUser } from "reactfire";

type Props = {};

const Home = ({}: Props) => {
  const { data: user } = useUser();

  return (
    <div className="p-2 text-center">
      Welcome, <span className="text-primary">{user?.email}</span>
      {/* <Counter /> */}
    </div>
  );
};

export default Home;
