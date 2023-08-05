import PropTypes from "prop-types";

const Button = ({ text, onClick, currentPage }) => {
  return (
    <button
      disabled={currentPage === 1 && text === "Previous"}
      onClick={onClick}
      className={
        currentPage === 1 && text === "Previous"
          ? "bg-gray-600 text-gray-400 rounded px-2 py-1"
          : "bg-slate-700 rounded px-2 py-1 "
      }
    >
      {text}
    </button>
  );
};
Button.defaultProps = {
  text: "Button",
  color: "steelblue",
};
Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};
export default Button;
