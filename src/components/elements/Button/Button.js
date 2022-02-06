import React from 'react'
import styles from './Button.module.scss'

const Button = ({ href, bigger, children, ...props }) => {
  const btnStyle = bigger ? styles.btnBig : styles.btn
  return (
    <>
      {href ? (
        <a className={btnStyle} href={href} {...props}>
          {children}
        </a>
      ) : (
        <button className={btnStyle} {...props}>
          {children}
        </button>
      )}
    </>
  )
}
export default Button
