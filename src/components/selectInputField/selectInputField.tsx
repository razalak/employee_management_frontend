import "./selectInputField.css";

type SelectInputField = {
  label: string;
  name: string;
  placeholder: string;
  values: Array<string>;
};

const SelectInputField = ({
  label,
  name,
  values,
  placeholder,
}: SelectInputField) => {
  return (
    <div className="select-input-field-div">
      <label>
        {label}
        <select name={name} required>
          <option value="" selected hidden disabled>
            {placeholder}
          </option>
          {values.map((item, idx) => (
            <option key={idx} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default SelectInputField;
