export const formSections = [
  {
    title: 'Personal Information',
    fields: [
      { label: 'Photo', type: 'file', placeholder: '', isOptional: true },
      { label: 'Name', type: 'text', placeholder: '' },
      { label: 'Surname', type: 'text', placeholder: '' },
      { label: 'Phone', type: 'text', placeholder: '' },
      { label: 'Email', type: 'email', placeholder: '' },
      { label: 'LinkedIn', type: 'url', placeholder: '', isOptional: true },
      { label: 'Website', type: 'url', placeholder: '', isOptional: true },
    ],
  },
  {
    title: 'Summary',
    fields: [
      {
        label: 'Description',
        type: 'textarea',
        placeholder:
          'Craft a brief yet engaging introduction. Highlight your position, notable accomplishments and expertise. (Recommended under 200 words)',
      },
    ],
  },
  {
    title: 'Work Experience',
    fields: [
      { label: 'Position', type: 'text', placeholder: '' },
      { label: 'Company', type: 'text', placeholder: '' },
      { label: 'Start Date', type: 'text', placeholder: '' },
      { label: 'End Date', type: 'text', placeholder: '' },
      {
        label: 'Description',
        type: 'textarea',
        placeholder: 'Enter details here. Recommended max 200 words.',
      },
    ],
    addButton: true,
  },
  {
    title: 'Technical Skills',
    fields: [{ label: 'Add Skill', type: 'text', placeholder: '' }],
    addButton: true,
  },
  {
    title: 'Qualifications',
    fields: [
      { label: 'Qualification', type: 'text', placeholder: '' },
      { label: 'Institute', type: 'text', placeholder: '' },
      { label: 'Start Date', type: 'text', placeholder: '' },
      { label: 'End Date', type: 'text', placeholder: '' },
    ],
    addButton: true,
  },
  {
    title: 'Education',
    fields: [
      { label: 'School', type: 'text', placeholder: '' },
      { label: 'Start Date', type: 'text', placeholder: '' },
      { label: 'End Date', type: 'text', placeholder: '' },
    ],
    addButton: true,
  },
];
