import { useState, useEffect } from 'react';
import InputSection from './form/FormInputSection';
import OutputSection from './cv/CVOutputSection';
import { formSections } from '../structure/formStructure';

export default function SectionContainer() {
  const [formValues, setFormValues] = useState({});

  // Load form values from local storage on initial render, if present
  useEffect(() => {
    const storedFormValues = localStorage.getItem('formValues');
    if (storedFormValues) {
      const parsedFormValues = JSON.parse(storedFormValues);
      setFormValues(parsedFormValues);
    }
  }, []);

  // Save form values to local storage
  useEffect(() => {
    if (Object.keys(formValues).length > 0) {
      localStorage.setItem('formValues', JSON.stringify(formValues));
    }
  }, [formValues]);

  const labelsToIds = {};
  formSections.forEach((section) => {
    section.fields.forEach((field) => {
      labelsToIds[field.label] = field.id;
    });
  });

  // Updates the form values state in response to user input
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
