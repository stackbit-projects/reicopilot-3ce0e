import React from 'react';
import _ from 'lodash';

import { htmlToReact, withPrefix } from '../utils';
import CtaButtons from './CtaButtons';

export default class SectionCta extends React.Component {
  render() {
    const section = _.get(this.props, 'section');
    const sectionId = _.get(section, 'section_id');
    const title = _.get(section, 'title');
    const subtitle = _.get(section, 'subtitle');
    const content = _.get(section, 'content');
    const actions = _.get(section, 'actions');
    const image = _.get(section, 'image');
    const imageAlt = _.get(section, 'imageAlt');

    // TODO: Update action buttons
    return (
      <section id={sectionId}>
        <div className="bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="bg-primary-600 dark:bg-primary-500 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
              <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
                <div className="lg:self-center">
                  <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                    {title && (<span className="block">{title}</span>)}
                    {subtitle && (<span className="block">{subtitle}</span>)}
                  </h2>
                  {content && (
                    <p className="mt-4 text-lg leading-6 text-primary-200 dark:text-primary-100">
                      {htmlToReact(content)}
                    </p>
                  )}
                  <a
                    href="#"
                    className="mt-8 bg-white border border-transparent rounded-md shadow
                    px-5 py-3 inline-flex items-center text-base font-medium text-primary-600
                    dark:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-100"
                  >
                    Sign up for free
                  </a>
                </div>
              </div>
              {image && (
                <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
                  <img
                    className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                    src={withPrefix(image)}
                    alt={imageAlt}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
