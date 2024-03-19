export const formSections = [
  {
    title: 'Personal Information',
    fields: [
      {
        id: 'personal-photo-' + crypto.randomUUID(),
        label: 'Photo',
        type: 'file',
        placeholder: '',
        isOptional: true,
      },
      {
        id: 'personal-name-' + crypto.randomUUID(),
        label: 'Name',
        type: 'text',
        placeholder: '',
      },
      {
        id: 'personal-surname-' + crypto.randomUUID(),
        label: 'Surname',
        type: 'text',
        placeholder: '',
      },
      {
        id: 'personal-jobtitle-' + crypto.randomUUID(),
        label: 'Job Title',
        type: 'text',
        placeholder: '',
      },
      {
        id: 'personal-phone-' + crypto.randomUUID(),
        label: 'Phone',
        type: 'text',
        placeholder: '',
      },
      {
        id: 'personal-email-' + crypto.randomUUID(),
        label: 'Email',
        type: 'email',
        placeholder: '',
      },
      {
        id: 'personal-linkedin-' + crypto.randomUUID(),
        label: 'LinkedIn',
        type: 'url',
        placeholder: '',
        isOptional: true,
      },
      {
        id: 'personal-website-' + crypto.randomUUID(),
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
    fields: [
      {
        id: 'work-experience-position-' + crypto.randomUUID(),
        label: 'Position',
        type: 'text',
        placeholder: '',
      },
      {
        id: 'work-experience-company-' + crypto.randomUUID(),
        label: 'Company',
        type: 'text',
        placeholder: '',
      },
      {
        id: 'work-experience-startdate-' + crypto.randomUUID(),
        label: 'Start Date',
        type: 'text',
        placeholder: '',
      },
      {
        id: 'work-experience-enddate-' + crypto.randomUUID(),
        label: 'End Date',
        type: 'text',
        placeholder: '',
      },
      {
        id: 'work-experience-description-' + crypto.randomUUID(),
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
    fields: [
      {
        id: 'qualification-name-' + crypto.randomUUID(),
        label: 'Qualification',
        type: 'text',
        placeholder: '',
      },
      {
        id: 'qualification-institute-' + crypto.randomUUID(),
        label: 'Institute',
        type: 'text',
        placeholder: '',
      },
      {
        id: 'qualification-startdate-' + crypto.randomUUID(),
        label: 'Start Date',
        type: 'text',
        placeholder: '',
      },
      {
        id: 'qualification-enddate-' + crypto.randomUUID(),
        label: 'End Date',
        type: 'text',
        placeholder: '',
      },
    ],
    addButton: true,
  },
  {
    title: 'Education',
    repeatable: true,
    fields: [
      {
        id: 'education-school-' + crypto.randomUUID(),
        label: 'School',
        type: 'text',
        placeholder: '',
      },
      {
        id: 'education-startdate-' + crypto.randomUUID(),
        label: 'Start Date',
        type: 'text',
        placeholder: '',
      },
      {
        id: 'education-enddate-' + crypto.randomUUID(),
        label: 'End Date',
        type: 'text',
        placeholder: '',
      },
    ],
    addButton: true,
  },
];
