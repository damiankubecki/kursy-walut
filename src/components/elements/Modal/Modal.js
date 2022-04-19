import React from 'react'
import styles from './Modal.module.scss'

const Modal = ({ title, content }) => {
  return (
    <div className={styles.background}>
      <div className={styles.modal}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.content}> {content}</p>
      </div>
    </div>
  )
}

export default Modal
