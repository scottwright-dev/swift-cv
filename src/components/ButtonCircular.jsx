import { PlusIcon } from '@heroicons/react/20/solid';
import PropTypes from 'prop-types';

function ButtonCircular({ text }) {
  return (
    <div className="flex flex-col items-center">
      <span className="pb-2">{text}</span>
      <button
        type="button"
        className="rounded-full bg-indigo-600 p-1.5 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        <PlusIcon className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  );
}

ButtonCircular.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ButtonCircular;
