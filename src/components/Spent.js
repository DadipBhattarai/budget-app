import React from "react";
import { BudgetContextState } from "../context/Context";

const Spent = () => {
  const { spents } = BudgetContextState();

  const total = spents.reduce((acc, curr) => {
    return (acc = acc + curr.cost);
  }, 0);

  return (
    <div className="spentBudget">
      <span>Spent: Rs.{total}</span>
    </div>
  );
};

export default Spent;
