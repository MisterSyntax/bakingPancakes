import React from 'react';
import PropTypes from 'prop-types';

/** Components */

/** styles */
import styles from './Spinning.module.css';

/** actions */

/** helpers */


export const Spinning = ({
  children,
}) => {
  return (
    <div className={styles.spinning}>
      {children}
    </div>
  );
};

Spinning.propTypes = {

};

export default Spinning;
