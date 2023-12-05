import React from 'react';
import { RequestOptions } from '@spotify-dash/types';
import classes from './OptionSetter.module.scss';

interface OptionSetterProps {
  options: RequestOptions;
  setOptions: (options: RequestOptions) => void;
}

export const OptionSetter: React.FC<OptionSetterProps> = ({
  options,
  setOptions,
}) => {
  return (
    <div className={classes.optionSetter}>
      <select
        value={options.time_range}
        onChange={(e) => setOptions({ ...options, time_range: e.target.value })}
      >
        <option value='long_term'>All Time</option>
        <option value='medium_term'>Last 6 Months</option>
        <option value='short_term'>Last Month</option>
      </select>

      <select
        value={options.limit}
        onChange={(e) => setOptions({ ...options, limit: +e.target.value })}
      >
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={50}>50</option>
      </select>
    </div>
  );
};
