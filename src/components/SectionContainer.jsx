import { useMemo, useState } from 'react';
import InputSection from './InputSection';
import OutputSection from './OutputSection';
import { formSections } from '../structure/formStructure';

export default function SectionContainer() {
  const [formValues, setFormValues] = useState({});

  // maps labels to UUIDs for simpler referencing
  const labelsToIds = useMemo(() => {
    const mapping = {};
    formSections.forEach((section) => {
      section.fields.forEach((field) => {
        mapping[field.label] = field.id;
      });
    });
    return mapping;
  }, []);

  // updates form values based on field id and value
  const handleInputChange = (id, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  return (
    <div className="flex min-h-screen pt-4">
      <InputSection onInputChange={handleInputChange} />
      <OutputSection formValues={formValues} labelsToIds={labelsToIds} />
    </div>
  );
}
