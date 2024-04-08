import { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ButtonSecondary from '../ButtonSecondary';
import { IconTrash } from '@tabler/icons-react';

function ImageUploader({
  label,
  isOptional,
  onImageSelect,
  onImageDelete,
  photo,
}) {
  // Reference to the file input DOM element,
  // used to trigger the file selection dialog when the custom button is clicked
  const fileInputRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(photo || '');
  const [errorMsg, setErrorMsg] = useState('');

  // Update imageSrc whenever photo changes
  useEffect(() => {
    setImageSrc(photo || '');
  }, [photo]);

  // handles photo upload
  const handleImageUpload = (event) => {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];

      // error handling if photo exceeds 1MB
      if (file.size > 1000000) {
        setErrorMsg('File is too large, please upload a file less than 1MB.');
        return;
      }

      setErrorMsg(''); // Clear error message

      const reader = new FileReader();
      reader.onloadend = function () {
        setImageSrc(reader.result);
        onImageSelect(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // handle image deletion
  const handleImageDelete = () => {
    setImageSrc('');
    onImageDelete(); // deletes rendered img
  };

  // Function to simulate a click on the hidden file input element,
  // this is used to open the file selection dialog when the custom button is clicked
  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="mb-4 flex flex-col">
      <label
        htmlFor="imageUpload"
        className="mb-2 block leading-6 text-gray-900"
      >
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
              className="h-full w-full text-gray-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          )}
        </span>
        <div className="flex-1">
          <input
            id="imageUpload"
            ref={fileInputRef}
            type="file"
            onChange={handleImageUpload}
            className="hidden"
            accept="image/jpeg, image/png, image/webp"
            aria-label={label + (isOptional ? ' (optional)' : '')}
          />
          <div className="flex items-center">
            <ButtonSecondary
              className="bg-white text-blue-900 outline-blue-900 hover:bg-blue-900 hover:text-white hover:outline-blue-900"
              text="Add Photo"
              onClick={handleClick}
            />
            <IconTrash
              className="ml-5 h-5 w-5 cursor-pointer text-gray-400 hover:text-gray-900"
              onClick={handleImageDelete}
            />
          </div>
          {errorMsg && <p className="mt-2 text-red-500">{errorMsg}</p>}
        </div>
      </div>
    </div>
  );
}

ImageUploader.propTypes = {
  label: PropTypes.string.isRequired,
  isOptional: PropTypes.bool,
  onImageSelect: PropTypes.func.isRequired,
  photo: PropTypes.string,
  onImageDelete: PropTypes.func.isRequired,
};

export default ImageUploader;
