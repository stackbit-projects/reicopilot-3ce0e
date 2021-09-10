import React from 'react';
import get from 'lodash/get';
import map from 'lodash/map';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';

import { htmlToReact, markdownify } from '../utils';
import classNames from 'classnames';

const faqs = [
    {
      question: "What's the best thing about Switzerland?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    // More questions...
]

const SectionFaq = (props) => {
  const section = get(props, 'section');
  const sectionId = get(section, 'section_id');
  const title = get(section, 'title');
  const faqItems = get(section, 'faq_items');

  return (
    <section id={sectionId}>
      <div className="bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200 dark:divide-gray-700">
            {title && (
              <h2 className="text-center text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                {title}
              </h2>
            )}
            <dl className="mt-6 space-y-6 divide-y divide-gray-200 dark:divide-gray-700">
              {map(faqItems, (faqItem) => (
                <Disclosure as="div" key={faqItem.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt className="text-lg">
                        <Disclosure.Button
                          className="text-left w-full flex justify-between items-start text-gray-400"
                        >
                          <span className="font-medium text-gray-900 dark:text-gray-100">{faqItem.question}</span>
                          <span className="ml-6 h-7 flex items-center">
                            <ChevronDownIcon
                              className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                              aria-hidden="true"
                            />
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-base text-gray-500 dark:text-gray-400">
                          {markdownify(faqItem.answer)}</p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );

    /*
    renderFaqItem(faqItem, index) {
        const question = get(faqItem, 'question');
        const answer = get(faqItem, 'answer');

        return (
            <React.Fragment key={index}>
                <h3 className="faq-accordion-header handorgel__header">
                    <button className="handorgel__trigger">
                        <span>{question}</span>
                        <span className="handorgel__icon icon-plus" />
                    </button>
                </h3>
                <div className="faq-accordion-content handorgel__content">
                    <div className="handorgel__content-inner">{markdownify(answer)}</div>
                </div>
            </React.Fragment>
        );
    }

    render() {
        

        return (
            <section id={sectionId} className={`block faq-block bg-${background} outer`}>
                <div className="inner-small">
                    <div className="block-header">
                        {title && <h2 className="block-title">{title}</h2>}
                        {subtitle && <p className="block-subtitle">{htmlToReact(subtitle)}</p>}
                    </div>
                    {faqItems && (
                        <div className="faq-accordion handorgel" ref={this.handorgelRef}>
                            {_.map(faqItems, (faqItem, index) => this.renderFaqItem(faqItem, index))}
                        </div>
                    )}
                </div>
            </section>
        );
    }
    */
}

export default SectionFaq;
