import React from 'react';
import get from 'lodash/get';
import classNames from 'classnames';
import { withPrefix } from '../utils';

export default class AffiliateLogo extends React.Component {
  render() {
    const idx = get(this.props, 'idx');
    const count = get(this.props, 'count');
    const logo = get(this.props, 'logo');
    const src = get(logo, 'src');
    const alt = get(logo, 'alt');

    if (!src) {
      return null;
    }

    return (
      <div className={classNames('h-12 col-span-1 flex justify-center md:col-span-2 lg:col-span-1', {
        'lg:col-start-2': idx === 0,
        'col-span-2 !important': idx === count - 1,
      })}>
        <img
          className={classNames('w-44', {
            'h-full object-cover': idx !== count - 1,
          })}
          src={withPrefix(src)}
          alt={alt}
        />
      </div>
    );
  }
}
