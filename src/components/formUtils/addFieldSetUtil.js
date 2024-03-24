import { formSections } from '../../structure/formStructure';

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
    const isWorkExperienceSection = sectionTitle
      .toLowerCase()
      .includes('work experience');

    const groupId = crypto.randomUUID();

    const newFieldsSet = templateFields.map((field) => {
      let newId;
      if (isSkillSection) {
        newId = `skill-${crypto.randomUUID()}`;
      } else if (isWorkExperienceSection) {
        const fieldName = field.id.split('-')[1];
        newId = `work-${fieldName}-${groupId}`;
      } else {
        newId = crypto.randomUUID();
      }
      return {
        ...field,
        id: newId,
      };
    });

    return {
      ...section,
      fields: [...section.fields, ...newFieldsSet],
    };
  });
};
