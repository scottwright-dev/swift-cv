import InputBasic from './InputBasic';
import FileInput from './FileInput';
import PropTypes from 'prop-types';

function FormField({ field, value, onChange }) {
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

FormField.propTypes = {
  field: PropTypes.object.isRequired,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
};

export default FormField;
