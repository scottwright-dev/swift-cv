import { Disclosure } from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import InputBasic from './InputBasic';
import FileInput from './FileInput';
import ButtonCircular from './ButtonCircular';

const formSections = [
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
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-200 px-4 py-2 text-left text-sm font-medium text-slate-900 hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span>{section.title}</span>
                      <ChevronRightIcon
                        className={`${open ? 'rotate-90 transform' : ''} h-5 w-5 text-slate-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                      {section.fields.map((field, fieldIdx) => {
                        return field.type === 'file' ? (
                          <FileInput
                            key={`${sectionIdx}-${fieldIdx}`}
                            label={field.label}
                            isOptional={field.isOptional}
                            onFileSelect={(file) => console.log(file)}
                          />
                        ) : (
                          <InputBasic
                            key={`${sectionIdx}-${fieldIdx}`}
                            label={field.label}
                            type={field.type}
                            placeholder={field.placeholder}
                            isOptional={field.isOptional}
                          />
                        );
                      })}
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
