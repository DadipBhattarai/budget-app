import React from "react";

const ViewBudget = ({ handleEdit, budget }) => {
  return (
    <div className="viewBudget">
      <span style={{ flex: 1 }}>Budget: Rs.{budget}</span>
      <button
        style={{
          padding: "5px 15px",
          fontSize: "15px",
          border: "none",
          backgroundColor: "blue",
          color: "white",
        }}
        onClick={handleEdit}
      >
        Edit
      </button>
    </div>
  );
};

export default ViewBudget;
