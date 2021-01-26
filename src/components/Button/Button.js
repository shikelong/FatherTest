import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Button.module.less';

 function Button(props) {
  return (
    <button
      className={
        classnames(styles.large, styles.bold)
      }
      style={{
        color: props.color
      }}
      onClick={props.onClick}
    >
      {props.children}  
    </button>
  );

  
}

Button.propTypes = {
  /** 色值 */
  color: PropTypes.string,
  children: PropTypes.any,
  onClick: PropTypes.func
}

console.log('aaaa:', Button.propTypes);

Button.defaultProps = {
  color: 'blue'
}

export default Button;