import React from 'react'
import styles from './CalcResult.module.scss'

const CalcResult = ({
  rateDate,
  sum,
  resultValue,
  exchangeRate,
  fromCurrency,
  toCurrency,
}) => {
  return (
    <div className={styles.wrapper}>
      <p>
        <span className={styles.leftSection}>
          {sum} {fromCurrency.code} ={' '}
        </span>
        <span className={styles.rightSection}>
          {resultValue} {toCurrency.code}
        </span>
      </p>
      <p className={styles.note}>
        1 {fromCurrency.code} = {exchangeRate} {toCurrency.code}, według średniego kursu NBP z
        dnia {rateDate}
      </p>
    </div>
  )
}

export default CalcResult
