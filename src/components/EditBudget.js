import React, { useState } from "react";

const EditBudget = ({ handleSave, budget }) => {
  const [editCost, setEditCost] = useState(budget);

  const handleEdit = (e) => {
    setEditCost(e.target.value);
  };

  return (
    <div className="editBudget">
      <input
        className="inputBudget"
        type="number"
        id="name"
        required
        value={editCost}
        onChange={handleEdit}
      />
      <button
        style={{
          padding: "5px 15px",
          fontSize: "15px",
          border: "none",
          backgroundColor: "blue",
          color: "white",
        }}
        onClick={() => handleSave(editCost)}
      >
        Save
      </button>
    </div>
  );
};

export default EditBudget;
