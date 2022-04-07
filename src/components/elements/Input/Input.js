import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import styles from './Input.module.scss'

const Input = ({ suffix, maxLength, ...props }) => {
  const input = useRef(null)
  const clearInputValue = () => (input.current.value = '')
  const checkInputLength = e => {
    e.target.value = e.target.value.slice(0, maxLength)
  }

  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.input}
        ref={input}
        style={{
          width: maxLength
            ? `${maxLength * 12 + 47.5 + (suffix ? suffix.length * 16 : 0)}px`
            : '200px',
          paddingRight: suffix ? `${suffix.length * 16 + 5}px` : '10px',
        }}
        maxLength={maxLength}
        onInput={e => checkInputLength(e)}
        {...props}
      />
      {suffix && <p className={styles.suffix}>{suffix.toUpperCase()}</p>}
      <div className={styles.clearBtn} onClick={clearInputValue}>
        <i className="fa-solid fa-xmark"></i>
      </div>
    </div>
  )
}

Input.propTypes = {
  suffix: PropTypes.string,
}

export default Input
