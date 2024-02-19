import { useState } from 'react';
import PropTypes from 'prop-types';
import { formSections } from '../structure/formStructure';
import InputSectionDisclosure from './InputSectionDisclosure';

function InputSection({ onInputChange }) {
  const [formValues, setFormValues] = useState({});

  const handleFieldChange = (fieldName, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [fieldName]: value,
    }));

    if (onInputChange) {
      onInputChange(fieldName, value);
    }
  };

  return (
    <div className="flex-1 bg-white p-4">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <form>
            {formSections.map((section) => (
              <InputSectionDisclosure
                key={section.title}
                section={section}
                formValues={formValues}
                handleFieldChange={handleFieldChange}
              />
            ))}
          </form>
        </div>
      </div>
    </div>
  );
}

InputSection.propTypes = {
  onInputChange: PropTypes.func,
};

export default InputSection;
