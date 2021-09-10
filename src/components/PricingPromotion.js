import React from 'react';

const PricingPromotion = () => {

  return (
    <div className="mt-4 relative max-w-7xl mx-auto lg:mt-5">
      <div className="max-w-4xl mx-auto xl:max-w-none">
        <div className="rounded-lg bg-gray-100 dark:bg-gray-800 px-6 py-8 sm:p-10 lg:flex lg:items-center">
          <div className="flex-1">
            <div>
              <h3
                className="inline-flex px-4 py-1 rounded-full text-sm font-semibold
                  tracking-wide uppercase bg-white text-gray-800 dark:bg-gray-600 dark:text-white"
              >
                Limited Time Offer
              </h3>
            </div>
            <div className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              <p>Worried about initial set-up?</p>
              <p>You may qualify for one-time concierge data entry for
                {' '}
                <span className="font-semibold text-gray-900 dark:text-white">$500</span>
                .
              </p>
            </div>
          </div>
          <div className="mt-6 rounded-md shadow lg:mt-0 lg:ml-10 lg:flex-shrink-0">
            <a
              href="#"
              className="flex items-center justify-center px-5 py-3 border border-transparent
                text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50 
                dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700"
            >
              Ask about availability
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingPromotion;