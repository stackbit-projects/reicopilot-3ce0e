import React from 'react';
import _ from 'lodash';

import { withPrefix, markdownify } from '../utils';

export default class SectionHero extends React.Component {
  render() {
    const section = _.get(this.props, 'section');
    const sectionId = _.get(section, 'section_id');
    const image = _.get(section, 'image');
    const imageAlt = _.get(section, 'image_alt');
    const title = _.get(section, 'title');
    const subtitle = _.get(section, 'subtitle');
    const content = _.get(section, 'content');
    const actions = _.get(section, 'actions');

    return (
      <div id={sectionId} className="relative bg-white dark:bg-gray-900 overflow-hidden">

        <div className="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
          <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                <h1>
                  <span className="block text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 sm:text-base lg:text-sm xl:text-base">
                    Coming soon
                  </span>
                  <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                    {title && <span className="block text-gray-900 dark:text-white">{title}</span>}
                    {subtitle && <span className="block text-primary-600 dark:text-primary-400">{subtitle}</span>}
                  </span>
                </h1>
                {content && (
                  <p className="mt-3 mr-4 text-base text-gray-500 dark:text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    {markdownify(content)}
                  </p>
                )}
                {actions && actions[0] && (
                  <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                    <form action="#" method="POST" className="mt-3 sm:flex">
                      <label htmlFor="email" className="sr-only">
                        Email
                      </label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        className="block w-full py-3 text-base rounded-md placeholder-gray-500 shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:flex-1 border-gray-300"
                        placeholder={actions[0].placeholder}
                      />
                      <button
                        type="submit"
                        className="mt-3 w-full px-6 py-3 border border-transparent text-base
                          font-medium rounded-md text-white bg-primary-600 shadow-sm
                          hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2
                          focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex
                          sm:items-center sm:w-auto dark:bg-primary-500 dark:hover:bg-primary-600"
                      >
                        {actions[0].label}
                      </button>
                    </form>
                    {actions[0].microcopy && (
                      <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 sm:mt-4">
                        {actions[0].microcopy}
                        {' '}
                        <a
                          href={withPrefix(actions[0].microcopyUrl)}
                          className="font-medium text-gray-900 dark:text-white underline"
                        >
                          {actions[0].microcopyLink}
                        </a>
                        .
                      </p>
                    )}
                  </div>
                )}
              </div>

              <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
                <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                  <div className="hidden sm:block">
                    <div className="absolute inset-y-0 left-1/2 w-screen bg-gray-50 dark:bg-gray-800 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full" />
                    <svg
                      className="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0"
                      width={404}
                      height={392}
                      fill="none"
                      viewBox="0 0 404 392"
                    >
                      <defs>
                        <pattern
                          id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                          x={0}
                          y={0}
                          width={20}
                          height={20}
                          patternUnits="userSpaceOnUse"
                        >
                          <rect x={0} y={0} width={4} height={4} className="text-gray-200 dark:text-gray-700" fill="currentColor" />
                        </pattern>
                      </defs>
                      <rect width={404} height={392} fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)" />
                    </svg>
                  </div>
                  <div className="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
                    <img
                      className="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                      src={image}
                      alt={imageAlt}
                    />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}
