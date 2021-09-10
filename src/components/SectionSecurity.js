import React from 'react';
import get from 'lodash/get';
import { htmlToReact, Link, withPrefix } from '../utils';

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
            <div className="relative">
              // Disclosure goes here
            </div>
            <div className="relative">
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
                    className="bg-primary-600 dark:bg-primary-500 border border-transparent inline-block
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
