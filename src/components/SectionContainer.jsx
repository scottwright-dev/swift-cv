import { useState } from 'react';
import InputSection from './InputSection';
import OutputSection from './OutputSection';

export default function SectionContainer() {
  const [formValues, setFormValues] = useState({});

  // updates form values based on field name and value
  const handleInputChange = (fieldName, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [fieldName]: value,
    }));
  };

  return (
    <div className="flex min-h-screen pt-4">
      <InputSection onInputChange={handleInputChange} />
      <OutputSection formValues={formValues} />
    </div>
  );
}
