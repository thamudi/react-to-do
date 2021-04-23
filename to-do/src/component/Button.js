const Button = ({ color, backgroundColor, value }) => {
  return (
    <button style={{ color, backgroundColor }} className="btn">
      {value}
    </button>
  );
};

Button.defaultProps = {
  color: "whitesmoke",
  backgroundColor: "Black",
  value: "Add",
};

export default Button;
