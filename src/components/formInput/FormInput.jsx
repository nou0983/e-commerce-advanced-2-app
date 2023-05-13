import Wrapper from "./formInput.styles";

const FormInput = ({ type, label, name, id, value, placeholder, onChangeHandler }) => {
  return (
    <Wrapper>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        placeholder={placeholder}
        required
        onChange={onChangeHandler}
      />
    </Wrapper>
  );
};

export default FormInput;
