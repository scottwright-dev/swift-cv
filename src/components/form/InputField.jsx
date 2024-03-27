import InputBasic from './InputBasic';
import ImageUploader from './ImageUploader';
import PropTypes from 'prop-types';
import { IconTrash } from '@tabler/icons-react';

function InputField({ field, value, onChange, onDelete }) {
  const showDeleteButton = () => {
    if (field.type === 'file') {
      return value !== null && value !== undefined;
    } else {
      return value !== '';
    }
  };

  const handleDelete = () => {
    if (field.type === 'file') {
      onChange(null);
    } else {
      onChange('');
    }
    if (onDelete) {
      onDelete();
    }
  };

  return (
    <div className="flex items-center">
      <div className="flex-grow">
        {field.type === 'file' ? (
          <ImageUploader
            label={field.label}
            isOptional={field.isOptional}
            onImageSelect={(file) => onChange(file)}
            onImageDelete={handleDelete}
            photo={value}
          />
        ) : (
          <InputBasic
            label={field.label}
            type={field.type}
            placeholder={field.placeholder}
            isOptional={field.isOptional}
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        )}
      </div>
      {showDeleteButton() && (
        <button onClick={handleDelete} className="ml-2">
          <IconTrash className="h-5 w-5 text-gray-400 hover:text-gray-900" />
        </button>
      )}
    </div>
  );
}

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
};

export default InputField;
