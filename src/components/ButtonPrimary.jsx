import PropTypes from 'prop-types';

function ButtonPrimary({ text, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-md bg-slate-200 px-3.5 py-2.5 text-sm font-semibold text-blue-900 transition-colors duration-200 ease-in-out hover:bg-blue-400 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
    >
      {text}
    </button>
  );
}

ButtonPrimary.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ButtonPrimary;
