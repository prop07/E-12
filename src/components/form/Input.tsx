type Props = {
  type: string;
  name: string;
  placeholder: string;
};

const Input = ({ type, name, placeholder }: Props) => {
  return (
    <div>
      <label htmlFor={name}>{name}:</label>
      <br />
      <input type={type} name={name} id={name} placeholder={placeholder} />
    </div>
  );
};

export default Input;
