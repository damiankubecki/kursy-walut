import React from 'react'
import styles from './Buttons.module.scss'
import Button from '../../../../../../elements/Button/Button'

const Buttons = ({ switchFn, resetFn }) => (
  <div className={styles.wrapper}>
    <Button noBorder margin="3px" type="button" onClick={resetFn}>
      <i className="fa-solid fa-xmark"></i>
    </Button>
    <Button noBorder margin="3px" type="button" onClick={switchFn}>
      <i className="fa-solid fa-right-left"></i>
    </Button>
  </div>
)

export default Buttons
