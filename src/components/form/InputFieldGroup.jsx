import PropTypes from 'prop-types';
import FormField from './InputField';

function InputFieldGroup({ section, formValues, handleFieldChange }) {
  return (
    <div>
      {section.fields.map((field) => (
        <FormField
          key={field.id}
          field={field}
          value={formValues[field.id] || ''}
          onChange={(value) => handleFieldChange(field.id, value)}
        />
      ))}
    </div>
  );
}

InputFieldGroup.propTypes = {
  section: PropTypes.object.isRequired,
  formValues: PropTypes.object.isRequired,
  handleFieldChange: PropTypes.func.isRequired,
};

export default InputFieldGroup;
