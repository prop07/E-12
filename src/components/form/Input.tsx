type Props = {
  type: string;
  name: string;
  placeholder?: string;
  value?: string;
};

const Input = ({ type, name, placeholder, value }: Props) => {
  return (
    <div>
      <label htmlFor={name}>{name}:</label>
      <br />
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

export default Input;
