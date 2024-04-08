import PropTypes from 'prop-types';

function ButtonSecondary({ text, onClick, className }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-md px-3.5 py-2.5 text-sm font-semibold outline outline-2 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900 ${className}`}
    >
      {text}
    </button>
  );
}

ButtonSecondary.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default ButtonSecondary;
