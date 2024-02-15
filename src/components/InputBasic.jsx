import PropTypes from 'prop-types';

function InputBasic({ label, type, placeholder, textRows = 4, isOptional }) {
  if (type === 'textarea') {
    return (
      <div>
        <label
          htmlFor={label.toLowerCase()}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
          {isOptional && <span className="text-gray-500"> (optional)</span>}
        </label>
        <div className="mt-2">
          <textarea
            rows={textRows}
            name={label.toLowerCase()}
            id={label.toLowerCase()}
            placeholder={placeholder}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            defaultValue={''}
          />
        </div>
      </div>
    );
  }
  return (
    <div className="relative mb-4">
      <label htmlFor={label.toLowerCase()} className="text-gray-700">
        {label}
        {isOptional && <span className="text-gray-400"> (optional)</span>}
      </label>
      <input
        type={type}
        name={label.toLowerCase()}
        id={label.toLowerCase()}
        placeholder={placeholder}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      />
    </div>
  );
}

InputBasic.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'textarea']).isRequired,
  placeholder: PropTypes.string.isRequired,
  textRows: PropTypes.number,
  isOptional: PropTypes.bool,
};

export default InputBasic;
