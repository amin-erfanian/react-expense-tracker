import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import categories from "../categories";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description should be at least 3 characters!" })
    .max(50),
  amount: z.number({ invalid_type_error: "Amount is required!" }),
  category: z.enum(categories, {
    message: "Category required!",
  }),
});

type ExpenseFormDate = z.infer<typeof schema>;

interface Props {
  onSubmit: (date: ExpenseFormDate) => void;
}

const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ExpenseFormDate>({
    resolver: zodResolver(schema),
  });

  return (
    <>
      {
        <form
          onSubmit={handleSubmit((data) => {
            onSubmit(data);
            reset();
          })}
        >
          <div className="mb-3">
            <label className="form-label" htmlFor="description">
              Description
            </label>
            <input
              {...register("description")}
              type="text"
              id="description"
              className="form-control"
            />
            {errors.description && (
              <p className="text-danger">{errors.description.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="amount">
              Amount
            </label>
            <input
              {...register("amount", { valueAsNumber: true })}
              type="text"
              id="amount"
              className="form-control"
            />
            {errors.amount && (
              <p className="text-danger">{errors.amount.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="category">
              Category
            </label>
            <select
              {...register("category")}
              id="category"
              className="form-select"
            >
              <option value=""></option>
              {categories.map((category) => (
                <option value={category} key={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
            {errors.category && (
              <p className="text-danger">{errors.category.message}</p>
            )}
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      }
    </>
  );
};

export default ExpenseForm;
