import React from 'react'
import styles from './CalcResult.module.scss'

const CalcResult = ({ result }) => {
  const { amount, exchangeRate, from, to, rateDate } = result || {}
  return (
    <>
      {result?.amount ? (
        <div className={styles.wrapper}>
          <p>
            <span className={styles.leftSection}>
              {from.sum.toString().replace('.', ',')} {from.fromCurrency} ={' '}
            </span>
            <span className={styles.rightSection}>
              {amount.toFixed(2).toString().replace('.', ',')} {to}
            </span>
          </p>
          <p className={styles.note}>
            1 {from.fromCurrency} ={' '}
            {exchangeRate.toFixed(4).toString().replace('.', ',')} {to}, według
            średniego kursu NBP z dnia {rateDate}
          </p>
        </div>
      ) : null}
    </>
  )
}

export default CalcResult
