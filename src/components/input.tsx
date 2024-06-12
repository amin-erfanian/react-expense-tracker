interface Props {
  placeholder?: string;
  onChange: () => void;
  value?: string | number;
  type: string;
}

const Input = ({
  value = "",
  type = "text",
  onChange,
  placeholder = "placeholder!!",
}: Props) => {
  return (
    <>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
