import InputBasic from './InputBasic';
import FileInput from './FileInput';
import PropTypes from 'prop-types';
import { TrashIcon } from '@heroicons/react/24/outline';

function InputField({ field, value, onChange }) {
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
  };

  return (
    <div className="flex items-center">
      <div className="flex-grow">
        {field.type === 'file' ? (
          <FileInput
            label={field.label}
            isOptional={field.isOptional}
            onFileSelect={(file) => onChange(file)}
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
          <TrashIcon className="h-5 w-5 text-gray-400 hover:text-gray-900" />
        </button>
      )}
    </div>
  );
}

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
};

export default InputField;
