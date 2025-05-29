import "./textInputField.css";

type TextInputFieldProps = {
  placeholder: string;
  label: string;
  variants?: string;
  type?: string;
  value?: string;
  ref?: React.RefObject<HTMLInputElement | null>;
  endAdornment?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
   disabled?: boolean; 
};

const TextInputField = ({
  placeholder,
  label,
  variants = "default",
  value,
  type,
  onChange,
  endAdornment,
  ref,
  disabled=false
}: TextInputFieldProps) => {
  return (
    <div className={`text-input-field-div`}>
      <label className={`label--${variants}`}>
        <input
          type={type || "text"}
          className={`input--${variants}`}
          onChange={onChange}
          placeholder={variants === "default" ? placeholder : ""}
          value={value}
          ref={ref}
          disabled={disabled}
          required
        />
        <span>{label}</span>
        <div className="end-adornment">{endAdornment}</div>
      </label>
    </div>
  );
};

export default TextInputField;
