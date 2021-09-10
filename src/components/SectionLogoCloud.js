import React from 'react';
import get from 'lodash/get';
import map from 'lodash/map';
import kebabCase from 'lodash/kebabCase';

import AffiliateLogo from './AffiliateLogo';

export default class SectionLogoCloud extends React.Component {
  render() {
    const section = get(this.props, 'section');
    const sectionId = get(section, 'section_id');
    const affiliateLogos = get(section, 'affiliateLogos');

    return (
      <div id={sectionId} className="bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase text-gray-500 dark:text-gray-300 tracking-wide">
            Developed and maintained by top engineers from
          </p>
          <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
            {affiliateLogos && map(affiliateLogos, (logo, idx) => (
              <AffiliateLogo
                key={kebabCase(logo.alt)}
                logo={logo}
                idx={idx}
                count={affiliateLogos.length}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
