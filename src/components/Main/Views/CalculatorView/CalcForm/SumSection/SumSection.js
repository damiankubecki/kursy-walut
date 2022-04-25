import React from 'react'
import styles from './SumSection.module.scss'
import Input from '../../../../../elements/Input/Input'

const SumSection = ({ fromCurrencyCode, setSum, clearSum }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Kwota:</p>
      <Input
        type={'number'}
        maxLength={8}
        suffix={fromCurrencyCode || '???'}
        placeholder={'Wpisz kwotę'}
        onChange={e => setSum(e.target.value * 1)}
        onClear={clearSum}
      />
    </div>
  )
}

export default SumSection
