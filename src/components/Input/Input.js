import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

const Input = ({ suffix, width, children, onClear, ...props }) => {
  const input = useRef(null);
  const onClickClearBtn = () => {
    input.current.value = '';
    if (typeof onClear === 'function') onClear();
  };

  const inputStyle = {
    width: width,
    paddingLeft: '30px',
    paddingRight: suffix ? `${suffix.length * 16 + 5}px` : '10px',
  };

  return (
    <div className={styles.wrapper}>
      {children && <p className={styles.title}>{children}</p>}
      <div className={styles.inputContainer}>
        <input className={styles.input} ref={input} style={inputStyle} {...props} />
        {suffix && <p className={styles.suffix}>{suffix.toUpperCase()}</p>}
        <button className={styles.clearBtn} type="button" onClick={onClickClearBtn}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
  );
};

Input.propTypes = {
  suffix: PropTypes.string,
};

export default Input;
