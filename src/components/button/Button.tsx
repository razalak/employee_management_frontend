import "./Button.css";

type ButtonProps = {
  label: string;
  type?: "submit" | "reset" | "button" | undefined;
  ref?: React.RefObject<HTMLButtonElement | null>;
  onClick?: () => void;
  variants?: string;
  className?: string;
  disabled?:boolean;
  isLoading?: boolean;
};

const Button = ({
  label,
  onClick,
  variants = "default",
  ref,
  type = "submit",
  className,
  disabled,
  isLoading
}: ButtonProps) => {
  const variantClasses = variants
    .split(" ")
    .reduce((acc, curr) => acc + ` button--${curr}`, "");
  return (
    <button
      type={type}
      ref={ref}
      onClick={onClick}
      disabled={disabled}
      className={`button ${variantClasses} ` + className}
    >
      {isLoading ? 'loading' : label}
    </button>
  );
};

export default Button;
