import React from 'react';
import get from 'lodash/get';
import map from 'lodash/map';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';

import components, { Layout } from '../components/index';
import { htmlToReact, getPageUrl } from '../utils';

const Page = (props) => {
  const page = get(props, 'page');
  const data = get(props, 'data');
  const config = get(data, 'config');
  const title = get(page, 'title');
  const pretitle = get(page, 'pretitle');
  const subtitle = get(page, 'subtitle');
  const sections = get(page, 'sections');
  const pageUrl = getPageUrl(page);

  return (
    <Layout page={page} config={config}>
      <div className="relative py-16 bg-white dark:bg-gray-900 overflow-hidden">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
            <svg
              className="absolute top-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200 dark:text-gray-700" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
            </svg>
            <svg
              className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200 dark:text-gray-700" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
            </svg>
            <svg
              className="absolute bottom-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="d3eb07ae-5182-43e6-857d-35c643af9034"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200 dark:text-gray-700" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
            </svg>
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              {pretitle && (
                <span className="block text-base text-center text-primary-500 dark:text-primary-400
                  font-semibold tracking-wide uppercase">
                  {pretitle}
                </span>
              )}
              {title && (
                <span className="mt-2 block text-3xl text-center leading-8 font-extrabold
                  tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                  {title}
                </span>
              )}
            </h1>
            {subtitle && (
              <p className="mt-8 text-xl text-gray-500 dark:text-gray-300 leading-8">
                {htmlToReact(subtitle)}
              </p>
            )}
            
          </div>
          {map(sections, (section, index) => {
            const sectionType = get(section, 'type');
            const component = upperFirst(camelCase(sectionType));
            if (!component) {
              throw new Error(`page section does not have the 'type' property, page: ${pageUrl}`);
            }
            const Component = components[component];
            if (!Component) {
              throw new Error(`no component matching the page section's type: ${sectionType}`);
            }
            return <Component key={index} section={section} data={data} />;
          })}
        </div>
      </div>
    </Layout>
  );
}

export default Page;
