import PropTypes from "prop-types";
function Button({ text, onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        className="bg-black text-white font-normal p-[5px] rounded"
      >
       
        {text}
      </button>
    </div>
  );
}
export default Button;

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};