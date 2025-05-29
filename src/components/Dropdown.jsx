// src/components/Dropdown.jsx

const Dropdown = ({ label, value, options, onChange }) => {
  return (
    <label style={{ display: "block", marginBottom: "10px" }}>
      {label}
      <select
        value={value}
        onChange={onChange}
        style={{ marginLeft: "10px", padding: "5px" }}
      >
        <option value="">Select...</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Dropdown;
