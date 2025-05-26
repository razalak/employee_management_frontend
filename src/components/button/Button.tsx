import "./Button.css";

type ButtonProps = {
  label: string;
  onClick: () => void;
  variants: string;
};

const Button = ({ label, onClick, variants }: ButtonProps) => {
  const variantClasses = variants
    .split(" ")
    .reduce((acc, curr) => acc + ` button--${curr}`, "");
  return (
    <button onClick={onClick} className={`button ${variantClasses}`}>
      {label}
    </button>
  );
};

export default Button;
