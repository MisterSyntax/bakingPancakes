import React from 'react';
import PropTypes from 'prop-types';

/** Components */

/** styles */
import styles from './Marquee.module.css';

/** actions */

/** helpers */


export const Marquee = ({
  children
}) => {
  return (
    <div class={styles.marquee}>
    	<div class={styles['marquee-content']} aria-hidden="true">
    	   {children}
    	</div>
    </div>
  );
};

Marquee.propTypes = {

};

export default Marquee
