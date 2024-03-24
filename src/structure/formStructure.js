export const formSections = [
  {
    title: 'Personal Information',
    fields: (() => {
      const groupId = crypto.randomUUID();
      return [
        {
          id: `personal-photo-${groupId}`,
          label: 'Photo',
          type: 'file',
          placeholder: '',
          isOptional: true,
        },
        {
          id: `personal-name-${groupId}`,
          label: 'Name',
          type: 'text',
          placeholder: '',
        },
        {
          id: `personal-surname-${groupId}`,
          label: 'Surname',
          type: 'text',
          placeholder: '',
        },
        {
          id: `personal-jobtitle-${groupId}`,
          label: 'Job Title',
          type: 'text',
          placeholder: '',
        },
        {
          id: `personal-phone-${groupId}`,
          label: 'Phone',
          type: 'text',
          placeholder: '',
        },
        {
          id: `personal-email-${groupId}`,
          label: 'Email',
          type: 'email',
          placeholder: '',
        },
        {
          id: `personal-linkedin-${groupId}`,
          label: 'LinkedIn',
          type: 'url',
          placeholder: '',
          isOptional: true,
        },
        {
          id: `personal-website-${groupId}`,
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
        id: 'summary-' + crypto.randomUUID(),
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
    fields: (() => {
      const groupId = crypto.randomUUID();
      return [
        {
          id: `work-position-${groupId}`,
          label: 'Position',
          type: 'text',
          placeholder: '',
        },
        {
          id: `work-company-${groupId}`,
          label: 'Company',
          type: 'text',
          placeholder: '',
        },
        {
          id: `work-startdate-${groupId}`,
          label: 'Start Date',
          type: 'text',
          placeholder: '',
        },
        {
          id: `work-enddate-${groupId}`,
          label: 'End Date',
          type: 'text',
          placeholder: '',
        },
        {
          id: `work-description-${groupId}`,
          label: 'Description',
          type: 'textarea',
          placeholder: 'Enter details here. Recommended max 200 words.',
        },
      ];
    })(),
    addButton: true,
  },
  {
    title: 'Technical Skills',
    repeatable: true,
    fields: [
      {
        id: 'skill-' + crypto.randomUUID(),
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
      const groupId = crypto.randomUUID();
      return [
        {
          id: `qualification-name-${groupId}`,
          label: 'Qualification',
          type: 'text',
          placeholder: '',
        },
        {
          id: `qualification-institute-${groupId}`,
          label: 'Institute',
          type: 'text',
          placeholder: '',
        },
        {
          id: `qualification-startdate-${groupId}`,
          label: 'Start Date',
          type: 'text',
          placeholder: '',
        },
        {
          id: `qualification-enddate-${groupId}`,
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
      const groupId = crypto.randomUUID();
      return [
        {
          id: `education-school-${groupId}`,
          label: 'School',
          type: 'text',
          placeholder: '',
        },
        {
          id: `education-startdate-${groupId}`,
          label: 'Start Date',
          type: 'text',
          placeholder: '',
        },
        {
          id: `education-enddate-${groupId}`,
          label: 'End Date',
          type: 'text',
          placeholder: '',
        },
      ];
    })(),
    addButton: true,
  },
];
