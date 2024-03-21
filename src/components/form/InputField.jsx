import InputBasic from './InputBasic';
import FileInput from './FileInput';
import PropTypes from 'prop-types';
import { TrashIcon } from '@heroicons/react/24/outline';

function InputField({ field, value, onChange, onDelete }) {
  return (
    <>
      {field.type === 'file' && (
        <FileInput
          label={field.label}
          isOptional={field.isOptional}
          onFileSelect={(file) => onChange(file)}
        />
      )}
      {field.type !== 'file' && (
        <div className="flex items-center">
          <div className="flex-grow">
            <InputBasic
              label={field.label}
              type={field.type}
              placeholder={field.placeholder}
              isOptional={field.isOptional}
              value={value}
              onChange={(e) => onChange(e.target.value)}
            />
          </div>
          <button onClick={() => onDelete(field.id)} className="ml-2">
            <TrashIcon className="h-5 w-5 text-gray-400 hover:text-gray-900" />
          </button>
        </div>
      )}
    </>
  );
}

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default InputField;
