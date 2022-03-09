import React from 'react'
import styles from './CalcResult.module.scss'

const CalcResult = ({ showResult, result, rateDate }) => {
  const { amount, exchangeRate, from, to } = result || {}
  return (
    <div className={styles.wrapper}>
      {showResult && (
        <>
          <p>
            <span className={styles.leftSection}>
              {from.sum} {from.fromCurrency} ={' '}
            </span>
            <span className={styles.rightSection}>
              {amount} {to}
            </span>
          </p>
          <p className={styles.note}>
            1 {from.fromCurrency} = {exchangeRate} {to}, według średniego kursu NBP z
            dnia {rateDate}
          </p>
        </>
      )}
    </div>
  )
}

export default CalcResult
