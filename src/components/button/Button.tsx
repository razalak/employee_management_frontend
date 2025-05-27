import "./Button.css";

type ButtonProps = {
  label: string;
  type?: "submit" | "reset" | "button" | undefined;
  ref?: React.RefObject<HTMLButtonElement | null>;
  onClick?: () => void;
  variants?: string;
  className?: string;
};

const Button = ({
  label,
  onClick,
  variants = "default",
  ref,
  type = "submit",
  className,
}: ButtonProps) => {
  const variantClasses = variants
    .split(" ")
    .reduce((acc, curr) => acc + ` button--${curr}`, "");
  return (
    <button
      type={type}
      ref={ref}
      onClick={onClick}
      className={`button ${variantClasses} ` + className}
    >
      {label}
    </button>
  );
};

export default Button;
