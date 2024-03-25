import { formSections } from '../../structure/formStructure';

export const addNewFieldSet = (currentSections, sectionTitle) => {
  return currentSections.map((section) => {
    if (section.title !== sectionTitle || !section.repeatable) return section;

    const templateFields = formSections.find(
      (searchSection) => searchSection.title === sectionTitle,
    )?.fields;

    if (!templateFields) return section;

    const sectionTypes = {
      'technical skills': 'skill',
      'work experience': 'work',
      'qualification': 'qualification',
      'education': 'education',
    };

    const sectionType = Object.keys(sectionTypes).find((type) =>
      sectionTitle.toLowerCase().includes(type),
    );

    const groupId = crypto.randomUUID();

    const newFieldsSet = templateFields.map((field) => {
      let newId;
      if (sectionType) {
        const fieldName = field.id.split('-')[1];
        newId = `${sectionTypes[sectionType]}-${fieldName}-${groupId}`;
      } else {
        newId = crypto.randomUUID();
      }

      return { ...field, id: newId };
    });

    return { ...section, fields: [...section.fields, ...newFieldsSet] };
  });
};
