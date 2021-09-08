import React from 'react';
import _ from 'lodash';
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, MailIcon, ScaleIcon } from '@heroicons/react/outline';

import { htmlToReact, withPrefix, markdownify } from '../utils';
import CtaButtons from './CtaButtons';
import LeftFeature from './LeftFeature';
import RightFeature from './RightFeature';

export default class SectionFeatures extends React.Component {
    renderFeature(feature, index) {
      const image = _.get(feature, 'image');
      const imageAlt = _.get(feature, 'image_alt');
      const title = _.get(feature, 'title');
      const content = _.get(feature, 'content');
      const actions = _.get(feature, 'actions');

      return (
        <div key={index} className="block-item">
          <div className="grid">
            {image && (
              <div className="cell block-preview">
                <img src={withPrefix(image)} alt={imageAlt} />
              </div>
            )}
            <div className="cell block-content">
              <h3 className="block-title underline">{title}</h3>
              <div className="block-copy">{markdownify(content)}</div>
              {actions && (
                <div className="block-buttons">
                  <CtaButtons actions={actions} />
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }

    render() {
      const section = _.get(this.props, 'section');
      const sectionId = _.get(section, 'section_id');
      const background = _.get(section, 'background');
      const title = _.get(section, 'title');
      const subtitle1 = _.get(section, 'subtitle1');
      const subtitle2 = _.get(section, 'subtitle2');
      const subtitle3 = _.get(section, 'subtitle3');
      const includeDate = _.get(section, 'includeDate');
      const features = _.get(section, 'features');

      return (
        <section id={sectionId}>
          <div className="py-16 bg-white dark:bg-gray-900 overflow-hidden lg:py-24">
            <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
              <svg
                className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
                width={404}
                height={784}
                fill="none"
                viewBox="0 0 404 784"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200 dark:text-gray-700" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={404} height={784} fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
              </svg>

              <div className="relative">
                {title && (
                  <h2
                    className="text-center text-3xl leading-8 font-extrabold tracking-tight
                    text-white dark:text-gray-300 sm:text-4xl"
                  >
                    {title}
                  </h2>
                )}
                {subtitle1 && (
                  <div>
                    <p
                      className="mt-4 max-w-3xl mx-auto text-center text-xl
                      text-gray-500 dark:text-gray-300"
                    >
                      {subtitle1}
                      {includeDate && (' ' + new Date().getFullYear())}
                      {subtitle2 && subtitle2}
                    </p>
                    {subtitle3 && (
                      <p
                        className="max-w-3xl mx-auto text-center text-xl
                        text-gray-500 dark:text-gray-300"
                      >
                        {subtitle3}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {features && _.map(features, (feature, idx) => {
                if (idx % 2 === 0) {
                  return <LeftFeature feature={feature} />
                } else {
                  return <RightFeature feature={feature} />
                }
              })}

            </div>
          </div>
        </section>
      );

      return (
        <section id={sectionId} className={`block features-block bg-${background} outer`}>
          <div className="block-header inner-small">
            {title && <h2 className="block-title">{title}</h2>}
            {subtitle && <p className="block-subtitle">{htmlToReact(subtitle)}</p>}
          </div>
          {features && <div className="inner">{_.map(features, (feature, index) => this.renderFeature(feature, index))}</div>}
        </section>
      );
    }
}
