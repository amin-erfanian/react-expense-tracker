interface Props {
    categories: string[],
    value?: string; 
    onFilter: (category: string) => void;
}
const ExpenseFilter = ({categories, value='', onFilter}: Props) => {
    
  return (
    <>
    <select value={value} onChange={(event) => onFilter(event.target.value)} className="form-select mb-2">
        <option value="">
          All Categories
        </option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </option>
        ))}
      </select>
      </>
  )
}

export default ExpenseFilter