import { ref, set, update } from "firebase/database";
import { useDatabase, useDatabaseObjectData } from "reactfire";

const Counter = () => {
  const database = useDatabase();
  const counterRef = ref(database, "counter");

  const { status, data: count } = useDatabaseObjectData<number>(counterRef);

  const decreaseCount = () => {
    set(counterRef, (count as number) - 1);
  };

  const increaseCount = () => {
    set(counterRef, (count as number) + 1);
  };

  if (status === "loading") {
    return <span>loading...</span>;
  }

  return (
    <div>
      <button onClick={decreaseCount}>Decrease</button>
      {count}
      <button onClick={increaseCount}>Increase</button>
    </div>
  );
};

export default Counter;
