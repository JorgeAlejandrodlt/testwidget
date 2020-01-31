import React from 'react';
import styles from './style.css';

const Checkbox = () => {
    return (
      <div className={styles.checkboxwrapper}>
        <div className={styles.checkboxtitle}>
          <input type="checkbox" />
            Food and Beverages
        </div>
        <div className={styles.checkboxwrapper}>
          <div className={styles.checkboxtitle}>
            <input type="checkbox" />
            Nationals
          </div>
        </div>
      </div>
  );
};


export default Checkbox;

