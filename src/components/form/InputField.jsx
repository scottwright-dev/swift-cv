import InputBasic from './InputBasic';
import FileInput from './FileInput';
import PropTypes from 'prop-types';

function InputField({ field, value, onChange }) {
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
        <InputBasic
          label={field.label}
          type={field.type}
          placeholder={field.placeholder}
          isOptional={field.isOptional}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </>
  );
}

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
};

export default InputField;
