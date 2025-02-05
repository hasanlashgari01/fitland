const InputRadio = ({ id, name, value, changeHandler, defaultChecked, label }) => {
  return (
    <label htmlFor={id} className="flex items-center gap-2">
      <input type="radio" id={id} name={name} value={value} onChange={changeHandler} defaultChecked={defaultChecked} />
      {label}
    </label>
  );
};
export default InputRadio;
