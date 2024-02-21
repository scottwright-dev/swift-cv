import { Disclosure } from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';
import FormField from './FormField';
import ButtonCircular from './ButtonCircular';

function InputSectionDisclosure({ section, formValues, handleFieldChange }) {
  return (
    <Disclosure
      as="div"
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
              const fieldName = field.label.toLowerCase().replace(/ /g, '_');

              return (
                <FormField
                  key={fieldIdx}
                  field={field}
                  value={formValues[fieldName] || ''}
                  onChange={(e) => handleFieldChange(fieldName, e.target.value)}
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
  );
}

InputSectionDisclosure.propTypes = {
  section: PropTypes.object.isRequired,
  formValues: PropTypes.object.isRequired,
  handleFieldChange: PropTypes.func.isRequired,
};

export default InputSectionDisclosure;
