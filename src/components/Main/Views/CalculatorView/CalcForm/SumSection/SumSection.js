import React from 'react'
import styles from './SumSection.module.scss'
import Input from '../../../../../elements/Input/Input'

const SumSection = ({ fromCurrency, setSum }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Kwota:</p>
      <Input
        type={'number'}
        maxLength={8}
        suffix={fromCurrency?.code || '???'}
        placeholder={'Wpisz kwotę'}
        onChange={e => setSum(e.target.value * 1)}
      />
    </div>
  )
}

export default SumSection
