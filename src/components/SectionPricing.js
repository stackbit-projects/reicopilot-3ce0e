import React, { useState } from 'react';
import _ from 'lodash';
import { CheckIcon } from '@heroicons/react/solid';
import { Tab } from '@headlessui/react';

import { htmlToReact, classNames, markdownify } from '../utils';
import CtaButtons from './CtaButtons';
import PricingPromotion from './PricingPromotion';

const tiers = [
  {
    name: 'Basic',
    href: '#',
    priceBuyNow: 47,
    priceFreeTrial: 69,
    description: 'All the basics for starting a new business',
    includedFeatures: ['Potenti felis, in cras at at ligula nunc.', 'Orci neque eget pellentesque.'],
  },
  {
    name: 'Unlimited',
    href: '#',
    priceBuyNow: 97,
    priceFreeTrial: 139,
    description: 'All the basics for starting a new business',
    includedFeatures: [
      'Potenti felis, in cras at at ligula nunc. ',
      'Orci neque eget pellentesque.',
      'Donec mauris sit in eu tincidunt etiam.',
    ],
  },
]

const SectionPricing = (props) =>  {
  const tabs = ['Buy Now', 'Free Trial'];
  const [selectedTabIdx, setSelectedTab] = useState(0);
  const freeTrialSelected = selectedTabIdx === 1;

  const handleTabChange = (index) => {
    setSelectedTab(index);
  }

  const section = _.get(props, 'section');
  const sectionId = _.get(section, 'section_id');
  const background = _.get(section, 'background');
  const title = _.get(section, 'title');
  const subtitle = _.get(section, 'subtitle');
  const subtitle2 = _.get(section, 'subtitle2');
  const pricingPlans = _.get(section, 'pricing_plans');

  return (
    <section id={sectionId}>
      <div className="bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:flex-col sm:align-center">
            {title && (
              <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white sm:text-center">
                {title}
              </h1>
            )}
            {subtitle && (
              <p className="mt-5 text-xl text-gray-500 dark:text-gray-300 sm:text-center">
                {htmlToReact(subtitle)}
              </p>
            )}
            {subtitle2 && (
              <p className="mt-1 text-xl text-gray-500 dark:text-gray-300 sm:text-center">
                {htmlToReact(subtitle2)}
              </p>
            )}
            <Tab.Group onChange={handleTabChange}>
              <Tab.List className="relative self-center mt-6 bg-gray-100 dark:bg-gray-800 rounded-lg p-0.5 flex sm:mt-8">
                {tabs.map((option) => (
                  <Tab
                    key={option}
                    className={({ selected }) =>
                      classNames(
                        'relative w-1/2 rounded-md shadow-sm py-2 text-sm font-medium',
                        'whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-primary-500',
                        'focus:z-10 sm:w-auto sm:px-8',
                        selected
                          ? 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 '
                            + 'text-gray-900 dark:text-white'
                          : 'text-gray-700 dark:text-gray-200 border-transparent'
                      )
                    }
                  >
                    {option}
                  </Tab>
                ))}
              </Tab.List>
            </Tab.Group>
          </div>
          <div
            className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6
              lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4"
          >
            {tiers.map((tier, idx) => (
              <div
                key={tier.name}
                className="relative p-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700
                  rounded-2xl shadow-sm flex flex-col"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {tier.name}
                  </h3>
                  {idx === 1 && (
                    <p
                      className="absolute top-0 py-1.5 px-4 bg-primary-500 rounded-full transform 
                        text-xs font-semibold uppercase tracking-wide text-white -translate-y-1/2"
                    >
                      Most popular
                    </p>
                  )}
                  {!freeTrialSelected && (
                    <p className="mt-4 text-xl text-gray-500 dark:text-gray-400 line-through">
                      ${tier.priceFreeTrial} / month
                    </p>
                  )}
                  <p
                    className={classNames('flex items-baseline text-gray-900 dark:text-white', {
                      'mt-2': freeTrialSelected,
                      'mt-4': !freeTrialSelected,
                    })}
                  >
                    <span className="text-5xl font-extrabold tracking-tight">
                      ${freeTrialSelected ? tier.priceFreeTrial : tier.priceBuyNow}
                    </span>
                    {' '}
                    <span className="ml-1 text-xl font-semibold">
                      / month
                    </span>
                  </p>
                  <p className="mt-6 text-gray-500 dark:text-gray-400">
                    {tier.description}
                  </p>
                  <ul role="list" className="mt-6 space-y-6">
                    {tier.includedFeatures.map((feature) => (
                      <li key={feature} className="flex">
                        <CheckIcon className="flex-shrink-0 w-6 h-6 text-primary-500" aria-hidden="true" />
                        <span className="ml-3 text-gray-500 dark:text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={tier.href}
                  className={classNames(
                    'mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium', {
                    'bg-primary-50 text-primary-700 hover:bg-primary-100': idx !== 1,
                    'dark:bg-primary-200 dark:bg-text-primary-900 dark:hover:bg-primary-300': idx !== 1,
                    'bg-primary-500 text-white hover:bg-primary-600': idx === 1,
                  })}
                >
                  {freeTrialSelected ? 'Try' : 'Buy'} {tier.name}
                </a>
              </div>
            ))}
          </div>
          <PricingPromotion />
        </div>
      </div>
    </section>
  );

  return (
    <section id={sectionId} className={`block pricing-block bg-${background} outer`}>
      <div className="block-header inner-small">
        {title && <h2 className="block-title">{title}</h2>}
        {subtitle && <p className="block-subtitle">{htmlToReact(subtitle)}</p>}
      </div>
      {pricingPlans && (
        <div className="inner">
          <div className="grid">{_.map(pricingPlans, (plan, index) => this.renderPricingPlan(plan, index))}</div>
        </div>
      )}
    </section>
  );
}

export default SectionPricing;
