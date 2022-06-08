import React from "react";
import { BudgetContextState } from "../context/Context";

const Remaining = () => {
  const { spents, budget } = BudgetContextState();

  const totalSpent = spents.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  return (
    <div className="remainigBudget">
      <span>
        Remainig: Rs.
        <span style={{ color: budget < totalSpent ? "red" : "" }}>
          {budget - totalSpent}
        </span>
      </span>
    </div>
  );
};

export default Remaining;
