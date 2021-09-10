import React from 'react';
import get from 'lodash/get';

import { Link, withPrefix, classNames } from '../utils';
import Logo from './Logo';

const LogoWithText = ({ size, darkModeEnabled, section }) => {
  if (section) {
    size = get(section, 'size');
    darkModeEnabled = get(section, 'darkModeEnabled');
  }

  return (
    <Link href={withPrefix('/')} className="inline-flex self-start">
      <Logo
        className={classNames('fill-current text-primary-500 h-10 w-10', {
          'dark:text-primary-400': darkModeEnabled,
          'h-10 w-10': size !== 'sm',
          'h-8 w-8': size === 'sm',
        })}
      />
        <h1
          className={classNames('self-center ml-2 order-1 text-gray-900 tracking-tight', {
            'dark:text-white': darkModeEnabled,
            'text-2xl': size !== 'sm',
            'text-xl': size === 'sm',
          })}
        >
          REI Copilot
        </h1>
    </Link>
  );
}

export default LogoWithText