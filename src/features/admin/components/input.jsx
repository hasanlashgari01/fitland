const Input = ({ label, value, name, changeHandler }) => {
  return (
    <div>
      <label className="flex items-center justify-between text-sm">
        <span>{label}</span>
      </label>
      <input type="text" className="form-input" value={value} name={name} onChange={changeHandler} />
    </div>
  );
};

export default Input;
