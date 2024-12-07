import { createContext, ReactNode, useReducer } from "react";

type ContextProviderProps = {
  children: ReactNode;
};

export const ACTIONS = {
  // SET_TOKEN: "SET_TOKEN",
};

type DefaultValues = {
  // token: string | null | undefined;
};
const defaultValues: DefaultValues = {
  // token: undefined,
};

export const Context = createContext<[DefaultValues, React.Dispatch<any>]>([
  defaultValues,
  () => {},
]);

// action -> (type, payload)
const reducer = (
  state: DefaultValues,
  action: {
    type: keyof typeof ACTIONS;
    //  token: null | string
  }
) => {
  // if (action.type === ACTIONS.SET_TOKEN) {
  //   const updatedState = { ...state };
  //   updatedState.token = action.token;
  //   if (action.token) {
  //     localStorage.setItem("token", action.token);
  //   } else {
  //     localStorage.removeItem("token");
  //   }
  //   return updatedState;
  // }
  return state;
};

const ContextProvider = ({ children }: ContextProviderProps) => {
  const [state, dispatch] = useReducer(reducer, defaultValues);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export default ContextProvider;
