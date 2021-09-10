import React from 'react';
import get from 'lodash/get';
import map from 'lodash/map';

import { classNames } from '../utils';

const FormField = (props) => {
  const field = get(props, 'field');
  const hideLabels = get(props, 'hideLabels');
  const inputType = get(field, 'input_type');
  const label = get(field, 'label');
  const name = get(field, 'name');
  const autoComplete = get(field, 'autocomplete_value');
  const defaultValue = get(field, 'default_value');
  const options = get(field, 'options');
  const required = get(field, 'is_required');
  const colSpan = get(field, 'col_span');
  const attr = {};
  const nameLabel = `${name}-label`;

  if (label) {
    attr['aria-labelledby'] = nameLabel;
  }
  if (required) {
    attr.required = true;
  }

  return (
    <React.Fragment>
      {inputType !== 'checkbox' && label && (
        <label id={nameLabel} htmlFor={name} className={classNames({ 'sr-only': hideLabels })}>
          {label}
        </label>
      )}
      {inputType === 'checkbox' ? (
        <div className="form-checkbox">
          <input id={name} type="checkbox" name={name} {...attr} />
          {label && (
            <label htmlFor={name} id={nameLabel}>
              {label}
            </label>
          )}
        </div>
      ) : inputType === 'radio' ? (
        <fieldset className={classNames({
          'sm:col-span-2': colSpan && colSpan === 2, 
        })}>
          <legend className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            {label}
          </legend>
          <div className="mt-4 grid grid-cols-1 gap-y-4">
            {map(options, (option) => {
              const optionId = get(option, 'id');
              const optionLabel = get(option, 'label');

              return (
                <div key={optionId} className="flex items-center">
                  <input
                    id={optionId}
                    name={name}
                    defaultValue={optionId}
                    type="radio"
                    className="focus:ring-primary-500 h-4 w-4 text-primary-500
                      border-gray-300 dark:border-gray-600"
                  />
                  <label htmlFor={optionId} className="ml-3">
                    <span className="block text-sm text-gray-700 dark:text-gray-200">{optionLabel}</span>
                  </label>
                </div>
              );
            })}
          </div>
        </fieldset>
      ) : inputType === 'select' ? (
          <div className="form-select">
            <select id={name} name={name} {...attr}>
              {defaultValue && <option value="">{defaultValue}</option>}
              {map(options, (option, optionIdx) => (
                <option key={optionIdx} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
      ) : inputType === 'textarea' ? (
          <div className={classNames({
            'sm:col-span-2': colSpan && colSpan === 2, 
          })}>
            <div className="flex justify-between">
              <label
                htmlFor={name}
                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                {label}
              </label>
              <span id={`${name}-description`} className="text-sm text-gray-500 dark:text-gray-300">
                Max. 500 characters
              </span>
            </div>
            <div className="mt-1">
              <textarea
                id={name}
                name={name}
                aria-describedby={`${name}-description`}
                rows={4}
                className="block w-full shadow-sm sm:text-sm focus:ring-primary-500 dark:bg-gray-900 dark:text-white
                  focus:border-primary-500 border border-gray-300 dark:border-gray-600 rounded-md"
                maxLength="500"
                {...(defaultValue ? { placeholder: defaultValue } : null)}
                {...attr}
              />
            </div>
          </div>
      ) : (
        <div className={classNames({
          'sm:col-span-2': colSpan && colSpan === 2, 
        })}>
          <label
            htmlFor={name}
            className="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            {label}
          </label>
          <div className="mt-1">
            <input
              type={inputType}
              name={name}
              id={name}
              autoComplete={autoComplete}
              className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500
                border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white rounded-md"
              {...(defaultValue ? { placeholder: defaultValue } : null)}
              {...attr}
            />
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default FormField;
