import { useRef } from 'react';
import PropTypes from 'prop-types';
import ButtonSecondary from './ButtonSecondary';

function FileInput({ label, isOptional, onFileSelect }) {
  // ref to store file input DOM element for direct manipulation
  const fileInputRef = useRef(null);

  // function to handle file selection change event
  const handleFileChange = (event) => {
    // check if any file is selected and invoke the callback with the file
    if (event.target.files.length > 0) {
      onFileSelect(event.target.files[0]);
    }
  };

  // function to click the hidden file input when the custom button is clicked
  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="mb-2 flex items-start space-x-6">
      <div className="shrink-0">
        <span className="inline-block h-16 w-16 overflow-hidden rounded-full bg-slate-200">
          <svg
            className="h-full w-full text-indigo-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </span>
      </div>
      <div>
        <label className="block text-sm font-medium leading-6 text-gray-700">
          {label}
          {isOptional && <span className="text-gray-500"> (optional)</span>}
        </label>
        <input
          ref={fileInputRef}
          type="file"
          onChange={handleFileChange}
          className="hidden"
          aria-label={label + (isOptional ? ' (optional)' : '')}
        />
        <ButtonSecondary text="Add Photo" onClick={handleClick} />
      </div>
    </div>
  );
}

FileInput.propTypes = {
  label: PropTypes.string.isRequired,
  isOptional: PropTypes.bool,
  onFileSelect: PropTypes.func.isRequired,
};

export default FileInput;
