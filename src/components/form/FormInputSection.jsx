import { useState } from 'react';
import PropTypes from 'prop-types';
import { formSections } from '../../structure/formStructure';
import InputSectionDisclosure from './FormSectionDisclosurePanel';
import { addNewFieldSet } from '../formUtils/addFieldSetUtil';

function FormInputSection({ onInputChange, onDelete, formValues }) {
  // Manages the sections of the form
  const [sections, setSections] = useState(formSections);

  // Function to add a new set of fields to a section
  const addFieldSet = (sectionTitle) => {
    const groupId = crypto.randomUUID();
    setSections((prevSections) =>
      addNewFieldSet(prevSections, sectionTitle, groupId),
    );
  };
  // handles changes to any field in the form, updating the formValues state with new value
  const handleFieldChange = (id, value) => {
    // Propagate change event to parent component if handler is provided
    if (onInputChange) {
      onInputChange(id, value);
    }
  };

  return (
    <div className="flex-1 bg-white p-4">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <form>
            {sections.map((section) => (
              <InputSectionDisclosure
                key={section.title}
                section={section}
                formValues={formValues}
                handleFieldChange={handleFieldChange}
                onDelete={onDelete}
                addFieldSet={addFieldSet}
              />
            ))}
          </form>
        </div>
      </div>
    </div>
  );
}

FormInputSection.propTypes = {
  onInputChange: PropTypes.func,
  onDelete: PropTypes.func,
  formValues: PropTypes.object.isRequired,
};

export default FormInputSection;
