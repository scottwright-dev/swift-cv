import { formSections } from '../structure/formStructure';

// Function to clone a field and assign it a unique ID.
const cloneFieldWithNewId = (field) => ({
  ...field,
  id: crypto.randomUUID(),
});

// Adds a new set of fields to a input section of form
export const addNewFieldSet = (currentSections, sectionTitle) => {
  return currentSections.map((section) => {
    // Skip sections that do not match the title or not marked as repeatable
    if (section.title !== sectionTitle || !section.repeatable) return section;

    // Attempt to find the original structure of the fields intended for this section
    const templateFields = formSections.find(
      (searchSection) => searchSection.title === sectionTitle,
    )?.fields;

    // If no original template is found, return the section unmodified
    if (!templateFields) return section;

    // Generate a new set of fields based on template
    const newFieldsSet = templateFields.map(cloneFieldWithNewId);

    // Return updated section with new set of fields appended
    return {
      ...section,
      fields: [...section.fields, ...newFieldsSet],
    };
  });
};
