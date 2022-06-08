import "./App.css";
import AddExpense from "./components/AddExpense";
import Budget from "./components/Budget";
import ExpenseList from "./components/ExpenseList";
import Remaining from "./components/Remaining";
import Spent from "./components/Spent";
import Context from "./context/Context";

function App() {
  return (
    <Context>
      <div className="App">
        <h2>My Budget Planner</h2>
        <div>
          <Budget />
          <Remaining />
          <Spent />
        </div>
        <h2>Expenses</h2>
        <div>
          <ExpenseList />
        </div>
        <h2>Add Expenses</h2>
        <div>
          <AddExpense />
        </div>
      </div>
    </Context>
  );
}

export default App;
