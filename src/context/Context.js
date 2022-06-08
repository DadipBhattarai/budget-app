import { createContext, useContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

const BudgetReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        spents: [...state.spents, action.payload],
      };
    case "REMOVE_EXPENSE":
      return {
        ...state,
        spents: state.spents.filter((spent) => spent.id !== action.payload),
      };
    case "SET_BUDGET":
      return {
        ...state,
        budget: action.payload,
      };
    default:
      return state;
  }
};

const BudgetContext = createContext();

const initialState = {
  budget: 2000,
  spents: [
    {
      id: uuidv4(),
      name: "Food",
      cost: 300,
    },
    {
      id: uuidv4(),
      name: "Book",
      cost: 400,
    },
    {
      id: uuidv4(),
      name: "Drinks",
      cost: 500,
    },
  ],
};

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(BudgetReducer, initialState);

  return (
    <BudgetContext.Provider
      value={{
        spents: state.spents,
        budget: state.budget,
        dispatch: dispatch,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};

export default Context;

export const BudgetContextState = () => {
  return useContext(BudgetContext);
};
