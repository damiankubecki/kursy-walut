import React from 'react'
import styles from './Button.module.scss'

const Button = ({ href, noBorder, margin, children, ...props }) => {
  const border = noBorder ? 'none' : '2px solid'
  return (
    <>
      {href ? (
        <a
          className={styles.btn}
          href={href}
          style={{
            borderBottom: border,
            margin: margin,
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
