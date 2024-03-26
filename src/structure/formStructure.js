export const formSections = [
  {
    title: 'Personal Information',
    fields: (() => {
      return [
        {
          id: `personal-photo`,
          label: 'Photo',
          type: 'file',
          placeholder: '',
          isOptional: true,
        },
        {
          id: `personal-name`,
          label: 'Name',
          type: 'text',
          placeholder: '',
        },
        {
          id: `personal-surname`,
          label: 'Surname',
          type: 'text',
          placeholder: '',
        },
        {
          id: `personal-jobtitle`,
          label: 'Job Title',
          type: 'text',
          placeholder: '',
        },
        {
          id: `personal-phone`,
          label: 'Phone',
          type: 'text',
          placeholder: '',
        },
        {
          id: `personal-email`,
          label: 'Email',
          type: 'email',
          placeholder: '',
        },
        {
          id: `personal-linkedin`,
          label: 'LinkedIn',
          type: 'url',
          placeholder: '',
          isOptional: true,
        },
        {
          id: `personal-website`,
          label: 'Website',
          type: 'url',
          placeholder: '',
          isOptional: true,
        },
      ];
    })(),
  },
  {
    title: 'Summary',
    fields: [
      {
        id: 'summary',
        label: 'Summary',
        type: 'textarea',
        placeholder:
          'Craft a brief yet engaging introduction. Highlight your position, notable accomplishments and expertise. (Recommended under 200 words)',
        isOptional: true,
      },
    ],
  },
  {
    title: 'Work Experience',
    repeatable: true,
    fields: [
      {
        id: 'work-position',
        label: 'Position',
        type: 'text',
        placeholder: '',
      },
      {
        id: 'work-company',
        label: 'Company',
        type: 'text',
        placeholder: '',
      },
      {
        id: 'work-startdate',
        label: 'Start Date',
        type: 'text',
        placeholder: '',
      },
      {
        id: 'work-enddate',
        label: 'End Date',
        type: 'text',
        placeholder: '',
      },
      {
        id: 'work-description',
        label: 'Description',
        type: 'textarea',
        placeholder: 'Enter details here. Recommended max 200 words.',
      },
    ],
    addButton: true,
  },
  {
    title: 'Technical Skills',
    repeatable: true,
    fields: [
      {
        id: 'skill-',
        label: 'Skill',
        type: 'text',
        placeholder: '',
      },
    ],
    addButton: true,
  },
  {
    title: 'Qualifications',
    repeatable: true,
    fields: (() => {
      return [
        {
          id: `qualification-name`,
          label: 'Qualification',
          type: 'text',
          placeholder: '',
        },
        {
          id: `qualification-institute`,
          label: 'Institute',
          type: 'text',
          placeholder: '',
        },
        {
          id: `qualification-startdate`,
          label: 'Start Date',
          type: 'text',
          placeholder: '',
        },
        {
          id: `qualification-enddate`,
          label: 'End Date',
          type: 'text',
          placeholder: '',
        },
      ];
    })(),
    addButton: true,
  },
  {
    title: 'Education',
    repeatable: true,
    fields: (() => {
      return [
        {
          id: `education-school`,
          label: 'School',
          type: 'text',
          placeholder: '',
        },
        {
          id: `education-startdate`,
          label: 'Start Date',
          type: 'text',
          placeholder: '',
        },
        {
          id: `education-enddate`,
          label: 'End Date',
          type: 'text',
          placeholder: '',
        },
      ];
    })(),
    addButton: true,
  },
];
