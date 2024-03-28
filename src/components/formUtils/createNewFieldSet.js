import { formSections } from '../../structure/formStructure';

export const createNewFieldSet = (currentSections, sectionTitle) => {
  return currentSections.map((section) => {
    if (section.title !== sectionTitle || !section.repeatable) return section;

    const sectionTemplate = formSections.find(
      (templateSection) => templateSection.title === sectionTitle,
    )?.fields;

    if (!sectionTemplate) return section;

    const sectionTypesMappingObj = {
      'technical skills': 'skill',
      'work experience': 'work',
      'qualification': 'qualification',
      'education': 'education',
    };

    const sectionType = Object.keys(sectionTypesMappingObj).find((type) =>
      sectionTitle.toLowerCase().includes(type),
    );

    const fieldSetId = crypto.randomUUID();

    const newFields = sectionTemplate.map((field) => {
      let fieldId;
      if (sectionType) {
        const fieldName = field.id.split('-')[1];
        fieldId = `${sectionTypesMappingObj[sectionType]}-${fieldName}-${fieldSetId}`;
      } else {
        fieldId = crypto.randomUUID();
      }
      return { ...field, id: fieldId };
    });

    return {
      ...section,
      fields: [...(section.fields || []), ...newFields],
    };
  });
};
