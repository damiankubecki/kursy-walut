import React from 'react'
import styles from './SumSection.module.scss'
import Input from '../../../../../elements/Input/Input'

const SumSection = ({ convertFrom, setSum }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Kwota:</p>
      <Input
        type={'number'}
        maxLength={8}
        suffix={convertFrom.code || '???'}
        placeholder={'Wpisz kwotę'}
        onChange={e => setSum(e.target.value * 1)}
      />
    </div>
  )
}

export default SumSection
