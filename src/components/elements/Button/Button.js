import React from 'react'
import styles from './Button.module.scss'

const Button = ({ href, bigger, noBorder, margin, children, ...props }) => {
  const border = noBorder ? 'none' : '2px solid'
  const fontSize = bigger ? '1.3rem' : '1rem'
  return (
    <>
      {href ? (
        <a
          className={styles.btn}
          href={href}
          style={{
            borderBottom: border,
            margin: margin,
            fontSize: fontSize,
          }}
          {...props}
        >
          {children}
        </a>
      ) : (
        <button
          className={styles.btn}
          style={{
            borderBottom: border,
            margin: margin,
            fontSize: fontSize,
          }}
          {...props}
        >
          {children}
        </button>
      )}
    </>
  )
}
export default Button
