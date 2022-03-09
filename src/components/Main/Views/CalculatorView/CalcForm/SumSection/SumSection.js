import React, { useRef } from 'react'
import styles from './SumSection.module.scss'

const INPUT_MAXLENGTH = 10

const SumSection = ({ convertFrom, setSum }) => {
  const input = useRef(null)
  const clearSum = () => {
    setSum(0)
    input.current.value = ''
  }
  const checkInputLength = e => {
    e.target.value = e.target.value.slice(0, INPUT_MAXLENGTH)
  }
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Kwota</p>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          ref={input}
          type="number"
          name="sum"
          placeholder="Wpisz kwotę"
          onInput={e => checkInputLength(e)}
          onChange={e => setSum(e.target.value * 1)}
        />
        <p className={styles.code}>{convertFrom ? convertFrom.code : '???'}</p>
        <div className={styles.clear} onClick={clearSum}>
          <i className="fa-solid fa-xmark"></i>
        </div>
      </div>
    </div>
  )
}

export default SumSection
