import PropTypes from 'prop-types';

function ButtonSecondary({ text }) {
  return (
    <button
      type="button"
      className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm outline outline-2 hover:bg-indigo-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {text}
    </button>
  );
}

ButtonSecondary.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ButtonSecondary;
