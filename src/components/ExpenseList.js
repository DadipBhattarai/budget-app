import React, { useEffect, useState } from "react";
import { BudgetContextState } from "../context/Context";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
  const { spents } = BudgetContextState();

  const [search, setSearch] = useState(spents || []);

  useEffect(() => {
    setSearch(spents);
  }, [spents]);

  const handleSearch = (e) => {
    const searchResult = spents.filter((searchSpent) =>
      searchSpent.name.toLowerCase().includes(e.target.value)
    );
    setSearch(searchResult);
  };

  return (
    <div>
      <input
        className="input"
        placeholder="Search Expenses"
        type="text"
        onChange={handleSearch}
      />
      <ul className="list-group">
        {search.map((spent, index) => (
          <ExpenseItem spent={spent} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
