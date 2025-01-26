const Input = ({ label, value, setValue, placeholder, isRequired, dir = "rtl" }) => {
  return (
    <label>
      <h3 className="text-sm">
        {label} {isRequired ? "*" : "(اختیاری)"}
      </h3>
      <input
        type="text"
        className="mt-2 w-full rounded-lg border text-sm border-neutral-200 px-3 py-2 outline-none"
        placeholder={placeholder}
        dir={dir}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </label>
  );
};

export default Input;
