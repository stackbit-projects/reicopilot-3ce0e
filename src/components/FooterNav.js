import React from 'react';
import get from 'lodash/get';
import map from 'lodash/map';

import { Link } from '../utils';

export default class FooterNav extends React.Component {
  render() {
    const section = get(this.props, 'section');
    const title = get(section, 'title');
    const navLinks = get(section, 'nav_links');

    return (
      <div>
        {title && (
          <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
            {title}
          </h3>
        )}
        {navLinks && (
          <ul role="list" className="mt-4 space-y-4">
            {map(navLinks, (action) => (
              <li key={action.label}>
                <Link
                  href={action.url}
                  className="text-base text-gray-500 hover:text-gray-900
                    dark:text-gray-300 dark:hover:text-white"
                >
                  {action.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
