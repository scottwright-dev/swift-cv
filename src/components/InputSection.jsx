import { Disclosure } from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import InputBasic from './InputBasic';
import ButtonCircular from './ButtonCircular';

const formSections = [
  {
    title: 'Personal Information',
    fields: [
      { label: 'Name', type: 'text', placeholder: 'First name' },
      { label: 'Surname', type: 'text', placeholder: 'Surname' },
      { label: 'Phone', type: 'text', placeholder: 'add phone number' },
      { label: 'Email', type: 'email', placeholder: 'email@example.com' },
      {
        label: 'LinkedIn',
        type: 'url',
        placeholder: 'https://www.linkedin.com/in/yourname',
        isOptional: true,
      },
      {
        label: 'Website',
        type: 'url',
        placeholder: 'https://www.yourwebsite.com',
        isOptional: true,
      },
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
      { label: 'Position', type: 'text', placeholder: 'Add job title' },
      { label: 'Company', type: 'text', placeholder: 'Add company name' },
      { label: 'Start Date', type: 'text', placeholder: 'Nov 2021' },
      { label: 'End Date', type: 'text', placeholder: 'Present' },
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
    fields: [{ label: 'Add Skill', type: 'text', placeholder: 'JavaScript' }],
    addButton: true,
  },
  {
    title: 'Qualifications',
    fields: [
      { label: 'Qualification', type: 'text', placeholder: 'CS Degree' },
      { label: 'Institute', type: 'text', placeholder: 'Add institute name' },
      { label: 'Start Date', type: 'text', placeholder: 'Sept 2021' },
      { label: 'End Date', type: 'text', placeholder: 'Dec 2023' },
    ],
    addButton: true,
  },
  {
    title: 'Education',
    fields: [
      { label: 'School', type: 'text', placeholder: 'Add School name' },
      { label: 'Start Date', type: 'text', placeholder: 'Sept 2021' },
      { label: 'End Date', type: 'text', placeholder: 'Dec 2023' },
    ],
    addButton: true,
  },
];

export default function InputSection() {
  return (
    <div className="flex-1 bg-white p-4">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <form>
            {formSections.map((section, sectionIdx) => (
              <Disclosure
                as="div"
                key={section.title}
                className="mb-4"
                defaultOpen={section.title === 'Personal Information'}
              >
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-100 px-4 py-2 text-left text-sm font-medium text-slate-900 hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span>{section.title}</span>
                      <ChevronRightIcon
                        className={`${open ? 'rotate-90 transform' : ''} h-5 w-5 text-slate-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                      {section.fields.map((field, fieldIdx) => (
                        <InputBasic
                          key={`${sectionIdx}-${fieldIdx}`}
                          label={field.label}
                          type={field.type}
                          placeholder={field.placeholder}
                          isOptional={field.isOptional}
                        />
                      ))}
                      {section.addButton && (
                        <div className="mt-4 flex justify-center">
                          <ButtonCircular text="Add More" />
                        </div>
                      )}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </form>
        </div>
      </div>
    </div>
  );
}
