import "./App.css";
import { useState } from "react";

import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";

function App() {
  const categories = ["food", "coffee", "transportation"];

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

  const [selectedCategory, setSelectedCategory] = useState("");

  const deleteExpense = (expenseId: number) =>
    setExpenseList(expenseList.filter((expense) => expense.id != expenseId));

  const filteredExpenses = selectedCategory
    ? expenseList.filter((expense) => expense.category === selectedCategory)
    : expenseList;

  return (
    <>
      <ExpenseFilter
        categories={categories}
        value={selectedCategory}
        onFilter={(category) => setSelectedCategory(category)}
      />
      <ExpenseList
        expenseList={filteredExpenses}
        onDelete={(expenseId) => deleteExpense(expenseId)}
      ></ExpenseList>
    </>
  );
}

export default App;
