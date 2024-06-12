import "./App.css";
import ExpenseList from "./components/ExpenseList";
import { useState } from "react";

function App() {
  const [expenseList, setExpenseList] = useState([
    {
      id: 1,
      description: "lunch with friends",
      amount: 160,
      category: "food",
    },
    {
      id: 2,
      description: "morning coffee",
      amount: 6,
      category: "coffee",
    },
    {
      id: 3,
      description: "snap",
      amount: 21,
      category: "transportation",
    },
  ]);

  const deleteExpense = (expenseId: number) =>
    setExpenseList(expenseList.filter((expense) => expense.id != expenseId));

  return (
    <>
      <ExpenseList
        expenseList={expenseList}
        onDelete={(expenseId) => deleteExpense(expenseId)}
      ></ExpenseList>
    </>
  );
}

export default App;
