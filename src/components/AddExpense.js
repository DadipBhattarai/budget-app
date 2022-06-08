import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BudgetContextState } from "../context/Context";

const AddExpense = () => {
  const { dispatch } = BudgetContextState();
  const [expenseName, setExpenseName] = useState("");
  const [expenseCost, setExpenseCost] = useState("");

  console.log(expenseCost);

  const handleSubmit = (e) => {
    e.preventDefault();
    const spent = {
      id: uuidv4(),
      name: expenseName,
      cost: parseInt(expenseCost),
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: spent,
    });
    setExpenseName("");
    setExpenseCost("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="label">Expense Name</label>
          <input
            type="text"
            className="input"
            placeholder="Expense Name"
            value={expenseName}
            onChange={(e) => setExpenseName(e.target.value)}
          />
        </div>
        <div>
          <label className="label">Expense Cost</label>
          <input
            type="text"
            className="input"
            placeholder="Expense Cost"
            value={expenseCost}
            onChange={(e) => setExpenseCost(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="save">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddExpense;
