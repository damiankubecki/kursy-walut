import React from 'react';
import styles from './Modal.module.scss';

const Modal = ({ title, content, handleClose }) => (
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
          <div className={styles.content}> {content}</div>
        </div>
      </div>
      <button className={styles.closeBtn} onClick={handleClose}>
        <i className="fas fa-times"></i>
      </button>
    </div>
  </div>
);

export default Modal;
