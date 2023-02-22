import classes from "./Button.module.css";
const colorVariant = {
  primary: {
    backgroundColor: "#2196f3",
    color: "#fff",
  },
  success: {
    backgroundColor: "#4caf50",
    color: "#000",
  },
  error: {
    backgroundColor: "#f44336",
    color: "#fff",
  },
  warning: {
    backgroundColor: "#ff9800",
    color: "#000",
  },
  info: {
    backgroundColor: "#80d8ff",
    color: "#000",
  },
};

const sizes = {
  small: {
    padding: "0.2rem 0.4rem",
  },
  medium: {
    padding: "1rem 2rem",
  },
  large: {
    padding: "1.5rem 3rem",
  },
};

function Button({ text, variant, size, onClick }) {
  const userColorVariant = colorVariant[variant];
  const userSizes = sizes[size];

  return (
    <button
      style={{ ...userColorVariant, ...userSizes }}
      className={classes.btn}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
