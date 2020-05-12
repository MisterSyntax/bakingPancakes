import React from 'react';
import PropTypes from 'prop-types';

/** Components */

/** styles */
import styles from './Blinker.module.css';

/** actions */

/** helpers */


export const Blinker = ({
  children
}) => {
  return (
    <div className={styles.blinker}>
      {children}
    </div>
  );
};

Blinker.propTypes = {

};

export default Blinker
