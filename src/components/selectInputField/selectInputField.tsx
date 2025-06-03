import type React from "react";
import "./selectInputField.css";

type SelectInputField = {
  label: string;
  name?: string;
  placeholder: string;
  values: Array<{label:string,value:number}>;
  value?:string;
  onChange?:(e:React.ChangeEvent<HTMLSelectElement>)=>void
};

const SelectInputField = ({
  label,
  name,
  values,
  placeholder,
  value,
  onChange
}: SelectInputField) => {
  return (
    <div className="select-input-field-div">
      <label>
        {label}
        <select name={name} value={value} onChange={onChange}required>
          <option value="" selected hidden disabled>
            
            { placeholder}
          </option>
          {values.map(({label,value}) => (
            <option  value={value}>
              {label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default SelectInputField;
