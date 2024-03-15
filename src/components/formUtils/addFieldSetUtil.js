import { formSections } from '../../structure/formStructure';

const cloneFieldWithNewId = (field, isSkillSection) => {
  // Prepend 'skill-' to the ID
  const newId = isSkillSection
    ? `skill-${crypto.randomUUID()}`
    : crypto.randomUUID();
  return {
    ...field,
    id: newId,
  };
};

export const addNewFieldSet = (currentSections, sectionTitle) => {
  return currentSections.map((section) => {
    if (section.title !== sectionTitle || !section.repeatable) return section;

    const templateFields = formSections.find(
      (searchSection) => searchSection.title === sectionTitle,
    )?.fields;

    if (!templateFields) return section;

    const isSkillSection = sectionTitle
      .toLowerCase()
      .includes('technical skills');

    const newFieldsSet = templateFields.map((field) =>
      cloneFieldWithNewId(field, isSkillSection),
    );

    return {
      ...section,
      fields: [...section.fields, ...newFieldsSet],
    };
  });
};
