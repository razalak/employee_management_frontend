import "./textInputField.css";

type TextInputFieldProps = {
  placeholder: string;
  label: string;
  type?: string;
  variants?: string;
};

const TextInputField = ({
  placeholder,
  label,
  type = "text",
  variants = "default",
}: TextInputFieldProps) => {
  return (
    <div className={`text-input-field-div`}>
      <label className={`label--${variants}`}>
        <input
          type={type}
          className={`input--${variants}`}
          placeholder={variants === "default" ? placeholder : ""}
          required
        />
        <span>{label}</span>
      </label>
    </div>
  );
};

export default TextInputField;
