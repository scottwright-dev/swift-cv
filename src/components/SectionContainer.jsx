import { useState } from 'react';
import InputSection from './form/FormInputSection';
import OutputSection from './cv/CVOutputSection';
import { formSections } from '../structure/formStructure';

export default function SectionContainer() {
  const [formValues, setFormValues] = useState({});

  const labelsToIds = {};
  formSections.forEach((section) => {
    section.fields.forEach((field) => {
      labelsToIds[field.label] = field.id;
    });
  });

  // updates form values based on field id and value
  const handleInputChange = (id, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  return (
    <main className="flex min-h-screen pt-4">
      <section className="flex w-2/5 flex-col">
        <InputSection
          onInputChange={handleInputChange}
          formValues={formValues}
        />
      </section>
      <section className="flex w-3/5 flex-col">
        <OutputSection formValues={formValues} labelsToIds={labelsToIds} />
      </section>
    </main>
  );
}
