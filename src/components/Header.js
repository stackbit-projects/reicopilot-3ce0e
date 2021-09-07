import React from 'react';
import _ from 'lodash';

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

import { Link, withPrefix, classNames, getPageUrl } from '../utils';
import Action from './Action';

export default class Header extends React.Component {
  render() {
    const config = _.get(this.props, 'config');
    const page = _.get(this.props, 'page');
    const configTitle = _.get(config, 'title');
    const header = _.get(config, 'header');
    const hasNav = _.get(header, 'has_nav');
    const navLinks = _.get(header, 'nav_links');
    const logoImage = _.get(header, 'logo_img');
    const logoImageAlt = _.get(header, 'logo_img_alt');
    const pageUrl = _.trim(getPageUrl(page), '/');

    return (
      <div className="relative pt-6 pb-6 z-10">
        <Popover>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
              <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  {logoImage && (
                    <Link href={withPrefix('/')}>
                      <span className="sr-only">{configTitle}</span>
                      <img
                        className="h-8 w-auto sm:h-10"
                        src={withPrefix(logoImage)}
                        alt={logoImageAlt}
                      />
                    </Link>
                  )}
                  <div className="-mr-2 flex items-center md:hidden">
                    <Popover.Button className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Open main menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <ul className="hidden md:flex md:space-x-10">
                {hasNav && !_.isEmpty(navLinks) && _.map(navLinks, (action, actionIdx) => {
                  const actionUrl = _.trim(_.get(action, 'url'), '/');
                  return (
                    <li
                      key={actionIdx}
                      className={classNames('font-medium', {
                        'text-indigo-600': pageUrl === actionUrl,
                        'text-gray-500': pageUrl !== actionUrl,
                        'hover:text-gray-900': pageUrl !== actionUrl,
                      })}
                    >
                      <Action action={action} />
                    </li>
                  );
                })}
              </ul>
              <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
                <span className="inline-flex rounded-md shadow">
                  <a
                    href="https://app.reicopilot.com"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500"
                  >
                    Log in
                  </a>
                </span>
              </div>
            </nav>
          </div>
      
          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    {logoImage && (
                      <Link href={withPrefix('/')}>
                        <img
                          className="h-8 w-auto"
                          src={withPrefix(logoImage)}
                          alt={logoImageAlt}
                        />
                      </Link>
                    )}
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close main menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <ul className="px-2 pt-2 pb-3 space-y-1">
                  {hasNav && !_.isEmpty(navLinks) && _.map(navLinks, (action, actionIdx) => {
                    const actionUrl = _.trim(_.get(action, 'url'), '/');
                    return (
                      <li
                        key={actionIdx}
                        className={classNames('block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50', {
                          'text-indigo-600': pageUrl === actionUrl,
                          'text-gray-700': pageUrl !== actionUrl,
                          'hover:text-gray-900': pageUrl !== actionUrl,
                        })}
                      >
                        <Action action={action} />
                      </li>
                    );
                  })}
                </ul>
                <a
                  href="https://app.reicopilot.com"
                  className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700"
                >
                  Log in
                </a>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    );
  }
}