import React, { useState } from 'react';
import get from 'lodash/get';
import map from 'lodash/map';
import { Switch } from '@headlessui/react';

import { htmlToReact, markdownify } from '../utils';
import FormField from './FormField';
import classNames from 'classnames';

const SectionContact = (props) => {
  const [agreed, setAgreed] = useState(false);

  const section = get(props, 'section');
  const sectionId = get(section, 'section_id');
  const hideLabels = get(section, 'hide_labels');
  const title = get(section, 'title');
  const subtitle = get(section, 'subtitle');
  const formAction = get(section, 'form_action');
  const formFields = get(section, 'form_fields');
  const submitLabel = get(section, 'submit_label');
  const formId = get(section, 'form_id');
  const formHoneypotInputId = formId + '-honeypot';
  const formHoneypotLabelId = formId + '-honeypot-label';
  const formHoneypotName = formId + '-bot-field';

  return (
    <section id={sectionId}>
      <div className="bg-white dark:bg-gray-900 py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
        <div className="relative max-w-xl mx-auto">
          <svg
            className="absolute left-full transform translate-x-1/2"
            width={404}
            height={404}
            fill="none"
            viewBox="0 0 404 404"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200 dark:text-gray-700" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
          </svg>
          <svg
            className="absolute right-full bottom-0 transform -translate-x-1/2"
            width={404}
            height={404}
            fill="none"
            viewBox="0 0 404 404"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200 dark:text-gray-700" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
          </svg>
          <div className="text-center">
            {title && (
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
                {htmlToReact(subtitle)}
              </p>
            )}
          </div>
          <div className="mt-12">
            <form
              name={formId}
              id={formId}
              {...(formAction ? { action: formAction } : null)}
              method="POST"
              data-netlify="true"
              data-netlify-honeypot={formHoneypotName}
              className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            >
              <div className="sr-only">
                <label id={formHoneypotLabelId} htmlFor={formHoneypotInputId}>
                  Don't fill this out if you're human:
                </label>
                <input aria-labelledby={formHoneypotLabelId} id={formHoneypotInputId} name={formHoneypotName} />
              </div>
              <input aria-labelledby={formHoneypotLabelId} type="hidden" name="form-name" value={formId} />
              {map(formFields, (field, idx) => (
                <FormField key={idx} field={field} hideLabels={hideLabels} />
              ))}
              <div className="sm:col-span-2">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Switch
                      checked={agreed}
                      onChange={setAgreed}
                      className={classNames(
                        agreed ? 'bg-primary-500' : 'bg-gray-200',
                        'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent',
                        'rounded-full cursor-pointer transition-colors ease-in-out duration-200',
                        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500'
                      )}
                    >
                      <span className="sr-only">Agree to policies</span>
                      <span
                        aria-hidden="true"
                        className={classNames(
                          agreed ? 'translate-x-5' : 'translate-x-0',
                          'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                        )}
                      />
                    </Switch>
                  </div>
                  <div className="ml-3">
                    <p className="text-base text-gray-500 dark:text-gray-300">
                      By selecting this, you agree to the{' '}
                      <a href="#" className="font-medium text-gray-700 dark:text-gray-200 underline">
                        Privacy Policy
                      </a>{' '}
                      and{' '}
                      <a href="#" className="font-medium text-gray-700 dark:text-gray-200 underline">
                        Cookie Policy
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3
                    border border-transparent rounded-md shadow-sm text-base font-medium
                    text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2
                    focus:ring-offset-2 focus:ring-primary-500"
                >
                  {submitLabel}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionContact;
