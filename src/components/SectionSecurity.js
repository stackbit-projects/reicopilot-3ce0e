import React, { useState } from 'react';
import get from 'lodash/get';
import map from 'lodash/map';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';

import { htmlToReact, Link, withPrefix } from '../utils';
import classNames from 'classnames';

const FeatureDisclosure = ({ feature, open, isFirst, handleClick }) => {
  const title = get(feature, 'title');
  const content = get(feature, 'content');

  return (
    <Disclosure as="div" className={classNames({ 'mt-2': !isFirst })}>
      {() => (
        <>
          <button
            onClick={handleClick}
            className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left
              text-primary-900 bg-primary-100 rounded-lg
              hover:bg-primary-200 focus:outline-none focus-visible:ring
              focus-visible:ring-primary-500 focus-visible:ring-opacity-75"
          >
            <span>{title}</span>
            <ChevronUpIcon
              className={`${
                open ? 'transform rotate-180' : ''
              } w-5 h-5 text-purple-500`}
            />
          </button>
          {open && (
            <Disclosure.Panel static className="px-4 pt-4 pb-2 text-sm text-gray-500">
              {content && htmlToReact(content)}
            </Disclosure.Panel>
          )}
        </>
      )}
    </Disclosure>
  );
}

const FeatureDisclosures = ({ features }) => {
  const featureMap = Array.from({ length: features.length }, (feature, idx) => ([idx, idx === 0]));
  const initialState = Object.fromEntries(featureMap);
  const [state, setState] = useState(initialState);

  const handleDisclosureClick = (idx) => {
    setState((state) => ({
      ...state,
      [idx]: !state[idx],
    }));
  };

  return (
    <div className="w-full px-4">
      <div className="w-full max-w-md p-2 mx-auto bg-white rounded-2xl">
        {map(features, (feature, idx) => (
          <FeatureDisclosure
            feature={feature}
            open={state[idx]}
            isFirst={idx === 0}
            handleClick={() => handleDisclosureClick(idx)}
          />
        ))}
      </div>
    </div>
  );
}

const SectionSecurity = (props) => {
  const section = get(props, 'section');
  const sectionId = get(section, 'id');
  const title = get(section, 'title');
  const content = get(section, 'content');
  const action = get(section, 'action');
  const actionLabel = get(action, 'label');
  const actionUrl = get(action, 'url');
  const features = get(section, 'features');

  return (
    <section id={sectionId}>
      <div className="py-16 bg-white dark:bg-gray-900 overflow-hidden lg:py-24">
        <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-6xl">
          <div className="relative lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="flex self-start">
              {features && (<FeatureDisclosures features={features} />)}
            </div>
            <div className="self-start">
              {title && (
                <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-3xl">
                  {title}
                </h3>
              )}
              {content && (
                <p className="mt-3 text-lg text-gray-500 dark:text-gray-300">
                 {htmlToReact(content)}
                </p>
              )}
              {action && actionLabel && actionUrl && (
                <div className="mt-6 rounded-md sm:mt-4 sm:flex-shrink-0">
                  <Link
                    href={withPrefix(actionUrl)}
                    className="bg-primary-600 dark:bg-primary-500 border border-transparent inline-flex
                      rounded-md py-2 px-4 flex items-center justify-center text-base font-medium
                      text-white hover:bg-primary-700 dark:hover:bg-primary-600 focus:outline-none focus:ring-2
                      focus:ring-offset-2 focus:ring-primary-600 dark:focus:ring-primary-500"
                  >
                    {actionLabel}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionSecurity;
