import React, { useState } from "react";
import { BudgetContextState } from "../context/Context";
import ViewBudget from "../ViewBudget";
import EditBudget from "./EditBudget";

const Budget = () => {
  const { budget, dispatch } = BudgetContextState();
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = (value) => {
    dispatch({
      type: "SET_BUDGET",
      payload: value,
    });
    setIsEditing(false);
  };

  return (
    <div>
      Budget
      {isEditing ? (
        <EditBudget handleSave={handleSave} budget={budget} />
      ) : (
        <ViewBudget handleEdit={handleEdit} budget={budget} />
      )}
    </div>
  );
};

export default Budget;
