import React from 'react'
import styles from './ChooseCurrenciesSection.module.scss'
import OptionsList from './OptionsList/OptionsList'
import Button from '../../../../../elements/Button/Button'

const ChooseCurrenciesSection = ({
  convertFrom,
  convertTo,
  currencies,
  selectFn,
  switchConvertedCurrencies,
}) => {
  return (
    <div className={styles.wrapper}>
      <OptionsList
        listName="convertFrom"
        currencies={currencies}
        selectedCurrency={convertFrom}
        otherSelectedCurrency={convertTo}
        selectFn={selectFn}
      >
        Mam
      </OptionsList>
      <Button noBorder bigger margin="5px" onClick={switchConvertedCurrencies}>
        <i className="fa-solid fa-right-left"></i>
      </Button>
      <OptionsList
        listName="convertTo"
        currencies={currencies}
        selectedCurrency={convertTo}
        otherSelectedCurrency={convertFrom}
        selectFn={selectFn}
      >
        Chcę otrzymać
      </OptionsList>
    </div>
  )
}

export default ChooseCurrenciesSection
