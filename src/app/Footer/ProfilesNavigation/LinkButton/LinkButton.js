import React, { useRef } from 'react'
import styles from './LinkButton.module.scss'
import variables from 'assets/variables.scss'

const { whiteColor, goldColor } = variables

const LinkButton = ({ href, children, iconLink, hoverColor, ...props }) => {
  const container = useRef(null)
  const icon = useRef(null)

  const setContainerColor = color => {
    container.current.style.borderColor = color
  }
  const setIconColor = color => {
    icon.current.style.color = color
  }

  return (
    <a
      className={styles.link}
      ref={container}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseOver={
        hoverColor
          ? () => {
              setContainerColor(hoverColor)
              setIconColor(hoverColor)
            }
          : null
      }
      onMouseLeave={
        hoverColor
          ? () => {
              setContainerColor(goldColor)
              setIconColor(whiteColor)
            }
          : null
      }
      {...props}
    >
      <span className={styles.icon} ref={icon}>
        <i className={iconLink}></i>
      </span>
      {children}
    </a>
  )
}

export default LinkButton
