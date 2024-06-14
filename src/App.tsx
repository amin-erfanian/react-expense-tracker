import "./App.css";
import { useState } from "react";
import { FieldValues } from "react-hook-form";

import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";

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

  const [selectedCategory, setSelectedCategory] = useState("");

  const deleteExpense = (expenseId: number) =>
    setExpenseList(expenseList.filter((expense) => expense.id != expenseId));

  const filteredExpenses = selectedCategory
    ? expenseList.filter((expense) => expense.category === selectedCategory)
    : expenseList;

  return (
    <>
      <div className="mb-3">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenseList([
              ...expenseList,
              { ...expense, id: expenseList.length + 1 },
            ])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          value={selectedCategory}
          onFilter={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenseList={filteredExpenses}
        onDelete={(expenseId) => deleteExpense(expenseId)}
      ></ExpenseList>
    </>
  );
}

export default App;
