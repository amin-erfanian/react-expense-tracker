interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenseList: Expense[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expenseList, onDelete }: Props) => {
  if (!expenseList.length)
    return (
      <>
        <h3>No Expenses</h3>
      </>
    );
  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {expenseList.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.description}</td>
              <td>{expense.amount}</td>
              <td>{expense.category}</td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => onDelete(expense.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>total</td>
            <td>
              {expenseList.reduce((prevAmount, expense) => {
                return prevAmount + expense.amount;
              }, 0)}
            </td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default ExpenseList;
