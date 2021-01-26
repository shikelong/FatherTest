import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './AntButton.module.less';
import {Button as AntDButton} from 'antd';

console.log(AntDButton.propTypes);

AntDButton.propTypes = {
  /** 色值 */
  color: PropTypes.string,
  children: PropTypes.any,
  onClick: PropTypes.func
}
export default AntDButton;