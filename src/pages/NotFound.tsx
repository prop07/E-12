import { useContext } from "react";
import { Context } from "../store";
import Navbar from "../layouts/Navbar";
import Container from "../components/Container";

type Props = {};

const NotFound = ({}: Props) => {
  const [state] = useContext(Context);

  if (state.token === undefined) {
    return null;
  }
  return (
    <div>
      <Navbar />
      <Container>Not Found</Container>
    </div>
  );
};

export default NotFound;
