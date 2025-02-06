const InputRadio = ({ id, name, value, changeHandler, label }) => {
  return (
    <label htmlFor={id} className="flex items-center gap-2">
      <input type="radio" id={id} name={name} value={value} onChange={changeHandler} />
      {label}
    </label>
  );
};
export default InputRadio;
