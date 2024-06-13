import styled from "styled-components";
import { FieldValues, useForm } from "react-hook-form";
const { register, handleSubmit } = useForm();

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

const ExpenseForm = () => {
  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <>
      {
        <Form onSubmit={handleSubmit(onSubmit)}>
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
        </Form>
      }
    </>
  );
};

export default ExpenseForm;
