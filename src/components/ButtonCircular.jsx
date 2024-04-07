import { IconPlus } from '@tabler/icons-react';
import PropTypes from 'prop-types';

function ButtonCircular({ text, onClick }) {
  return (
    <div className="flex flex-col items-center">
      <span className="pb-2">{text}</span>
      <button
        type="button"
        onClick={onClick}
        className="rounded-full bg-blue-900 p-1.5 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        <IconPlus className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  );
}

ButtonCircular.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default ButtonCircular;
