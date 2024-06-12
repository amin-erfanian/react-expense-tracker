import "./App.css";
import { useState } from "react";
import styled from "styled-components";
import { FieldValues, useForm } from "react-hook-form";

import ExpenseList from "./components/ExpenseList";

const Input = styled.input`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #a1a1a1;
  margin: 4px 0;
`;

const Form = styled.form`
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Button = styled.button`
  padding: 12px 8px;
  background-color: #2ba;
  color: white;
  border: none;
  border-radius: 8px;
`;

function App() {
  const { register, handleSubmit } = useForm();
  console.log(register);

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

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

  const deleteExpense = (expenseId: number) =>
    setExpenseList(expenseList.filter((expense) => expense.id != expenseId));

  return (
    <>
      {/* <Form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="description">Description</label>
        <Input
          {...register("description")}
          type="text"
          id="description"
          className="input-field"
        />
        <label htmlFor="amount">Amount</label>
        <Input
          {...register("amount")}
          type="text"
          id="amount"
          className="input-field"
        />
        <label htmlFor="category">Category</label>
        <Input
          {...register("category")}
          type="text"
          id="category"
          className="input-field"
        />

        <Button type="submit" className="submit-btn">
          submit
        </Button>
      </Form> */}
      <select className="form-select mb-2">
        <option value="all" selected>
          All Categories
        </option>
        {categories.map((category) => (
          <option value={category}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </option>
        ))}
      </select>
      <ExpenseList
        expenseList={expenseList}
        onDelete={(expenseId) => deleteExpense(expenseId)}
      ></ExpenseList>
    </>
  );
}

export default App;
