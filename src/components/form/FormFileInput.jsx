import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import ButtonSecondary from '../ButtonSecondary';

function FormFileInput({ label, isOptional, onFileSelect, onChange }) {
  // Reference to the file input DOM element,
  // used to trigger the file selection dialog when the custom button is clicked
  const fileInputRef = useRef(null);
  const [imageSrc, setImageSrc] = useState('');

  // handles photo upload
  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = function () {
        localStorage.setItem('image', reader.result);
        setImageSrc(reader.result);
        onFileSelect(reader.result);
        onChange(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Function to simulate a click on the hidden file input element,
  // this is used to open the file selection dialog when the custom button is clicked
  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="mb-4 flex flex-col">
      <label className="mb-2 block leading-6 text-gray-900">
        {label}
        {isOptional && <span className="text-gray-400"> (optional)</span>}
      </label>
      <div className="flex items-center">
        <span className="mr-6 inline-block h-14 w-14 overflow-hidden rounded-full bg-slate-200">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt="Uploaded profile image"
              className="h-full w-full object-cover"
            />
          ) : (
            <svg
              className="h-full w-full text-indigo-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          )}
        </span>
        <div className="flex-1">
          <input
            ref={fileInputRef}
            type="file"
            onChange={handleFileChange}
            className="hidden"
            accept="image/jpeg, image/png, image/webp"
            aria-label={label + (isOptional ? ' (optional)' : '')}
          />
          <ButtonSecondary text="Add Photo" onClick={handleClick} />
        </div>
      </div>
    </div>
  );
}

FormFileInput.propTypes = {
  label: PropTypes.string.isRequired,
  isOptional: PropTypes.bool,
  onFileSelect: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormFileInput;
