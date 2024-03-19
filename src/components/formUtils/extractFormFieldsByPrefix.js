export function extractFormFieldsByPrefix(formValues, prefix) {
  return Object.entries(formValues)
    .filter(([key]) => key.startsWith(prefix))
    .reduce((acc, [key, value]) => {
      const [, fieldName, index] = key.split('-');
      if (!acc[index]) {
        acc[index] = {};
      }
      acc[index][fieldName] = value;
      return acc;
    }, {});
}
