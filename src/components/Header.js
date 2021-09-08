import React from 'react';
import _ from 'lodash';

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

import { Link, withPrefix, classNames, getPageUrl } from '../utils';
import Action from './Action';
import Logo from './Logo';

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
      <div className="relative pt-6 pb-6 z-10 bg-white dark:bg-gray-900">
        <Popover>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
              <div className="flex items-center flex-1">
                <div className="flex items-center justify-between w-full md:w-auto">
                  {logoImage && (
                    <Link href={withPrefix('/')} className="inline-flex">
                      <Logo className="fill-current text-primary-600 dark:text-primary-400 h-10 w-10" />
                        <h1 class="self-center ml-2 order-1 text-gray-900 dark:text-white text-2xl tracking-tight">
                          REI Copilot
                        </h1>
                    </Link>
                  )}
                  <div className="-mr-2 flex items-center md:hidden">
                    <Popover.Button
                      className="bg-gray-50 dark:bg-gray-900 rounded-md p-2 inline-flex items-center
                      justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:text-gray-400 dark:hover:bg-gray-800
                      focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 dark:focus:ring-white"
                    >
                      <span className="sr-only">Open main menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <ul className="hidden md:flex md:ml-10 md:space-x-10">
                  {hasNav && !_.isEmpty(navLinks) && _.map(navLinks, (action, actionIdx) => {
                    const actionUrl = _.trim(_.get(action, 'url'), '/');
                    return (
                      <li
                        key={actionIdx}
                        className={classNames('font-medium', {
                          'text-primary-600 dark:text-primary-400': pageUrl === actionUrl,
                          'text-gray-500 dark:text-white': pageUrl !== actionUrl,
                          'hover:text-gray-900 dark:hover:text-gray-300': pageUrl !== actionUrl,
                        })}
                      >
                        <Action action={action} />
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="hidden md:flex md:items-center md:space-x-6">
                <a
                  href="https://app.reicopilot.com"
                  class="whitespace-nowrap text-base font-medium text-gray-500
                    hover:text-gray-900 dark:text-white dark:hover:text-gray-300"
                >
                  Sign in
                </a>
                <a
                  href="https://app.reicopilot.com"
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center
                  px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium
                  text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600"
                >
                  Start free trial
                </a>
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
              <div className="pb-6 rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    {logoImage && (
                      <Link href={withPrefix('/')} className="inline-flex">
                        <Logo className="fill-current text-primary-600 h-10 w-10" />
                        <h1 className="self-center ml-2 order-1 text-gray-900 text-2xl tracking-tight">
                          REI Copilot
                        </h1>
                      </Link>
                    )}
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
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
                          'text-primary-600': pageUrl === actionUrl,
                          'text-gray-700': pageUrl !== actionUrl,
                          'hover:text-gray-900': pageUrl !== actionUrl,
                        })}
                      >
                        <Action action={action} />
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-6 px-5">
                  <a
                    href="https://app.reicopilot.com"
                    className="block text-center w-full py-3 px-4 rounded-md shadow bg-primary-600
                      text-white font-medium hover:bg-primary-700"
                  >
                    Start free trial
                  </a>
                </div>
                <div className="mt-6 px-5">
                  <p className="text-center text-base font-medium text-gray-500">
                    Existing customer?
                    {' '}
                    <a
                      href="https://app.reicopilot.com"
                      className="text-gray-900 hover:underline"
                    >
                      Sign in
                    </a>
                  </p>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    );
  }
}