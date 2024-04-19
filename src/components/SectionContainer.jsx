import { useState, useEffect, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import InputSection from './form/FormInputSection';
import OutputSection from './cv/CVOutputSection';
import { formSections } from '../structure/formStructure';
import AppHeader from './AppHeader';
import MobileLayout from './MobileLayout';

// Create a mapping from field labels to their corresponding IDs.
// This allows for quick lookup of a field's ID based on its label.
const labelsToIds = {};
formSections.forEach((section) => {
  section.fields.forEach((field) => {
    labelsToIds[field.label] = field.id;
  });
});

export default function SectionContainer() {
  const [formValues, setFormValues] = useState({});
  const componentRef = useRef();
  const [isMobile, setIsMobile] = useState(false);

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

  // Updates the form values state in response to user input
  const handleInputChange = (id, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  // handles creating a pdf / saving a cv
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  // deletes all user input data in the cv
  const removeAllData = () => {
    localStorage.clear();
    setFormValues({});
  };

  // Check screen size on initial render and window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [activeScreen, setActiveScreen] = useState('inputsection');
  console.log('Initial activeScreen:', activeScreen);

  const handlePreview = () => {
    setActiveScreen('outputsection');
    console.log('Updated activeScreen:', 'outputsection');
  };

  const handleEdit = () => {
    setActiveScreen('inputsection');
    console.log('Updated activeScreen:', 'inputsection');
  };

  return (
    <>
      <AppHeader
        onErase={removeAllData}
        onPrint={handlePrint}
        onEdit={handleEdit}
        onPreview={handlePreview}
        isMobile={isMobile}
        activeScreen={activeScreen}
      />
      <main className="flex min-h-screen flex-col pt-4 md:flex-row">
        {isMobile ? (
          <MobileLayout
            formValues={formValues}
            labelsToIds={labelsToIds}
            onInputChange={handleInputChange}
            onDelete={removeAllData}
            onPreview={handlePreview}
            onEdit={handleEdit}
            activeScreen={activeScreen}
          />
        ) : (
          <>
            <section className="flex h-screen w-full flex-col overflow-y-auto md:w-2/5">
              <InputSection
                onInputChange={handleInputChange}
                formValues={formValues}
              />
            </section>
            <section className="flex h-screen w-full flex-col items-center md:w-3/5">
              <div
                ref={componentRef}
                className="max-w-210mm w-full flex-grow overflow-y-auto"
              >
                <OutputSection
                  formValues={formValues}
                  labelsToIds={labelsToIds}
                />
              </div>
            </section>
          </>
        )}
        {isMobile && (
          <div className="hidden">
            <div ref={componentRef}>
              <OutputSection
                formValues={formValues}
                labelsToIds={labelsToIds}
              />
            </div>
          </div>
        )}
      </main>
    </>
  );
}
