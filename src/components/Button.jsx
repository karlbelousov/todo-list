const Button = ({
  className = "",
  type = "button",
  children,
  isDisabled,
  onClick,
}) => {
  return (
    <button
      className={`button ${className}`}
      type={type}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
