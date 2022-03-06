import React from 'react'
import styles from './SumSection.module.scss'

const SumSection = ({convertFrom, handleSumChange}) => (
    <div className={styles.wrapper}>
    <p className={styles.title}>Kwota</p>
    <div className={styles.inputContainer}>
      <input
        className={styles.input}
        type="number"
        name="sum"
        placeholder="Wpisz kwotę"
        onChange={handleSumChange}
      />
      <p className={styles.code}>{convertFrom ? convertFrom.code : '???'}</p>
    </div>
  </div>
)

export default SumSection