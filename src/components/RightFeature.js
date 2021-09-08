import React from 'react';
import get from 'lodash/get';
import kebabCase from 'lodash/kebabCase';
import map from 'lodash/map';

import HeroIcons from './HeroIcons';
import { markdownify, withPrefix } from '../utils';

const RightFeature = ({ feature }) => {
  const image = get(feature, 'image');
  const imageAlt = get(feature, 'image_alt');
  const title = get(feature, 'title');
  const content = get(feature, 'content');
  const subfeatures = get(feature, 'subfeatures');
  const action = get(feature, 'action');

  return (
    <React.Fragment key={kebabCase(title)}>
      <svg
        className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
        width={404}
        height={784}
        fill="none"
        viewBox="0 0 404 784"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
            x={0}
            y={0}
            width={20}
            height={20}
            patternUnits="userSpaceOnUse"
          >
            <rect x={0} y={0} width={4} height={4} className="text-gray-200 dark:text-gray-700" fill="currentColor" />
          </pattern>
        </defs>
        <rect width={404} height={784} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
      </svg>

      <div className="relative mt-12 sm:mt-16 lg:mt-24">
        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="lg:col-start-2">
            {title && (
              <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-3xl">
                {title}
              </h3>
            )}
            {content && (
              <p className="mt-3 text-lg text-gray-500 dark:text-gray-300">
                {markdownify(content)}
              </p>
            )}
            
            <dl className="mt-10 space-y-10">
              {subfeatures && map(subfeatures, (item) => {
                const Icon = HeroIcons[item.icon];

                return (
                  <div key={item.id} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">{item.name}</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">{item.description}</dd>
                  </div>
                );
              })}
            </dl>
          </div>

          <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
            <svg
              className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
              width={784}
              height={404}
              fill="none"
              viewBox="0 0 784 404"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200 dark:text-gray-700" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={784} height={404} fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)" />
            </svg>
            <img
              className="relative mx-auto"
              width={490}
              src={withPrefix(image)}
              alt={imageAlt}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default RightFeature;
