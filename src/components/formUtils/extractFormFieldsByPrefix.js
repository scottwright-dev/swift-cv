export function extractFormFieldsByPrefix(formValues, prefix) {
  const fieldGroups = {};

  Object.entries(formValues).forEach(([key, value]) => {
    if (key.startsWith(prefix)) {
      const [, fieldName, index] = key.split('-');
      if (!fieldGroups[index]) {
        fieldGroups[index] = {};
      }
      fieldGroups[index][fieldName] = value;
    }
  });

  return Object.values(fieldGroups);
}
