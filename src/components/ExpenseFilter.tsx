import categories from "../categories";

interface Props {
  value?: string;
  onFilter: (category: string) => void;
}
const ExpenseFilter = ({ value = "", onFilter }: Props) => {
  return (
    <>
      <select
        value={value}
        onChange={(event) => onFilter(event.target.value)}
        className="form-select"
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </option>
        ))}
      </select>
    </>
  );
};

export default ExpenseFilter;
