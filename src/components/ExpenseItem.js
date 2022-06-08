import React from "react";
import { BudgetContextState } from "../context/Context";

const ExpenseItem = ({ spent }) => {
  const { id, name, cost } = spent;
  const { dispatch } = BudgetContextState();

  const hanldeDelete = () => {
    dispatch({
      type: "REMOVE_EXPENSE",
      payload: id,
    });
  };

  return (
    <div className="list-items">
      <span style={{ flex: 1 }}>{name}</span>
      <div className="actions">
        <span className="batch">Rs.{cost}</span>
        <button
          style={{
            border: "1px solid red",
            color: "red",
            padding: "5px 10px",
            marginLeft: "5px",
          }}
          onClick={hanldeDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ExpenseItem;
