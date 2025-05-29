const Dropdown = ({ label, value, options, onChange }) => {
  return (
    <div className="dropdown-group">
      <label className="dropdown-label">{label}</label>
      <select
        className="dropdown-select"
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;