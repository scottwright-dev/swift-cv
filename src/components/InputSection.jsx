import { Disclosure } from '@headlessui/react';
import { useState } from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { formSections } from '../structure/formStructure';
import InputBasic from './InputBasic';
import FileInput from './FileInput';
import ButtonCircular from './ButtonCircular';

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
