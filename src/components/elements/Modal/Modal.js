import React from 'react'
import styles from './Modal.module.scss'

const Modal = ({ title, text, onClose }) => {
  return (
    <div className={styles.background}>
      <div className={styles.modal}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.modalContent}>
          <div className={styles.leftSide}>
            <div className={styles.leftSideTextContainer}>
              <p className={styles.leftSideText}>Kursy walut online</p>
            </div>
          </div>
          <div className={styles.rightSide}>
            <p className={styles.text}> {text}</p>
          </div>
        </div>
        <button className={styles.closeBtn} onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
      </div>
    </div>
  )
}

export default Modal
