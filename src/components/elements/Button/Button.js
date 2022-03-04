import React from 'react'
import styles from './Button.module.scss'

const Button = ({ href, bigger, noBorder, margin, children, ...props }) => {
  const btnStyle = bigger ? styles.btnBig : styles.btn
  const border = noBorder ? 'none' : '2px solid'
  return (
    <>
      {href ? (
        <a
          className={btnStyle}
          href={href}
          style={{ borderBottom: border, margin: margin }}
          {...props}
        >
          {children}
        </a>
      ) : (
        <button
          className={btnStyle}
          style={{ borderBottom: border, margin: margin }}
          {...props}
        >
          {children}
        </button>
      )}
    </>
  )
}
export default Button
