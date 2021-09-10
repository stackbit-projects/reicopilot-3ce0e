import React from 'react';
import get from 'lodash/get';
import map from 'lodash/map';
import kebabCase from 'lodash/kebabCase';
import HeroIcons from './HeroIcons';

const SectionMiniFeatures = (props) => {
  const section = get(props, 'section');
  const sectionId = get(section, 'section_id');
  const title = get(section, 'title');
  const features = get(section, 'features');
  
  return (
    <section id={sectionId}>
      <div className="py-16 bg-white dark:bg-gray-900 overflow-hidden lg:py-24">
        <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-6xl">
          <h2 className="sr-only">{title}</h2>
          <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
            {map(features, (feature) => {
              const Icon = HeroIcons[feature.icon];

              return (
                <div key={kebabCase(feature.title)}>
                  <dt>
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="mt-5 text-lg leading-6 font-medium text-gray-900 dark:text-white">
                      {feature.title}
                    </p>
                  </dt>
                  <dd className="mt-2 text-base text-gray-500 dark:text-gray-300">
                    {feature.description}
                  </dd>
                </div>
              )
            })}
          </dl>
        </div>
      </div>
    </section>
  );
}

export default SectionMiniFeatures;
