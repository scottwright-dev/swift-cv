export const formSections = [
  {
    title: 'Personal Information',
    fields: [
      {
        id: crypto.randomUUID(),
        label: 'Photo',
        type: 'file',
        placeholder: '',
        isOptional: true,
      },
      {
        id: crypto.randomUUID(),
        label: 'Name',
        type: 'text',
        placeholder: '',
      },
      {
        id: crypto.randomUUID(),
        label: 'Surname',
        type: 'text',
        placeholder: '',
      },
      {
        id: crypto.randomUUID(),
        label: 'Phone',
        type: 'text',
        placeholder: '',
      },
      {
        id: crypto.randomUUID(),
        label: 'Email',
        type: 'email',
        placeholder: '',
      },
      {
        id: crypto.randomUUID(),
        label: 'LinkedIn',
        type: 'url',
        placeholder: '',
        isOptional: true,
      },
      {
        id: crypto.randomUUID(),
        label: 'Website',
        type: 'url',
        placeholder: '',
        isOptional: true,
      },
    ],
  },
  {
    title: 'Summary',
    fields: [
      {
        id: crypto.randomUUID(),
        label: 'Description',
        type: 'textarea',
        placeholder:
          'Craft a brief yet engaging introduction. Highlight your position, notable accomplishments and expertise. (Recommended under 200 words)',
        isOptional: true,
      },
    ],
  },
  {
    title: 'Work Experience',
    fields: [
      {
        id: crypto.randomUUID(),
        label: 'Position',
        type: 'text',
        placeholder: '',
      },
      {
        id: crypto.randomUUID(),
        label: 'Company',
        type: 'text',
        placeholder: '',
      },
      {
        id: crypto.randomUUID(),
        label: 'Start Date',
        type: 'text',
        placeholder: '',
      },
      {
        id: crypto.randomUUID(),
        label: 'End Date',
        type: 'text',
        placeholder: '',
      },
      {
        id: crypto.randomUUID(),
        label: 'Description',
        type: 'textarea',
        placeholder: 'Enter details here. Recommended max 200 words.',
      },
    ],
    addButton: true,
  },
  {
    title: 'Technical Skills',
    fields: [
      {
        id: crypto.randomUUID(),
        label: 'Add Skill',
        type: 'text',
        placeholder: '',
      },
    ],
    addButton: true,
  },
  {
    title: 'Qualifications',
    fields: [
      {
        id: crypto.randomUUID(),
        label: 'Qualification',
        type: 'text',
        placeholder: '',
      },
      {
        id: crypto.randomUUID(),
        label: 'Institute',
        type: 'text',
        placeholder: '',
      },
      {
        id: crypto.randomUUID(),
        label: 'Start Date',
        type: 'text',
        placeholder: '',
      },
      {
        id: crypto.randomUUID(),
        label: 'End Date',
        type: 'text',
        placeholder: '',
      },
    ],
    addButton: true,
  },
  {
    title: 'Education',
    fields: [
      {
        id: crypto.randomUUID(),
        label: 'School',
        type: 'text',
        placeholder: '',
      },
      {
        id: crypto.randomUUID(),
        label: 'Start Date',
        type: 'text',
        placeholder: '',
      },
      {
        id: crypto.randomUUID(),
        label: 'End Date',
        type: 'text',
        placeholder: '',
      },
    ],
    addButton: true,
  },
];
