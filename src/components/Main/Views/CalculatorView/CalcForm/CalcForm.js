import React from 'react'
import styles from './CalcForm.module.scss'
import ChooseCurrenciesSection from './ChooseCurrenciesSection/ChooseCurrenciesSection'
import SumSection from './SumSection/SumSection'
import Button from '../../../../elements/Button/Button'
import { findCurrencyByCode } from '../../../../../assets/functions/findCurrencyByCode'
import { calculatorViewConfig } from './../../../../../config'

class CalcForm extends React.Component {
  state = {
    currenciesCollection: this.props.currenciesCollection,
    convertFrom: '',
    convertTo: '',
    sum: 0,
  }

  componentDidMount() {
    const { currenciesCollection } = this.state
    const { initialCurrencies } = calculatorViewConfig
    this.setState({
      convertFrom: findCurrencyByCode(currenciesCollection, initialCurrencies.from),
      convertTo: findCurrencyByCode(currenciesCollection, initialCurrencies.to),
    })
  }

  setSum = value => this.setState({ sum: value })
  changeSelectOptionFn = e => {
    const { currenciesCollection } = this.state
    this.setState({
      [e.target.name]: findCurrencyByCode(currenciesCollection, e.target.value),
    })
  }
  calculateResult = () => {
    const { convertFrom, convertTo, sum } = this.state

    if (convertFrom && convertTo && sum) {
      const exchangeRate = convertFrom.mid / convertTo.mid
      const calcResult = sum * exchangeRate
      this.props.setResult(
        calcResult,
        sum,
        exchangeRate,
        convertFrom.code,
        convertTo.code
      )
      return true
    }
    return false
  }
  showResult = e => {
    e.preventDefault()
    if (this.calculateResult()) return this.props.setResultVisibility(true)
    this.props.setResultVisibility(false)
  }
  switchConvertedCurrencies = e => {
    e.preventDefault()
    const oldData = {
      convertFrom: this.state.convertFrom,
      convertTo: this.state.convertTo,
    }
    this.setState({
      convertFrom: oldData.convertTo,
      convertTo: oldData.convertFrom,
    })
  }
  resetSelectedCurrencies = e => {
    e.preventDefault()
    this.setState({ convertFrom: '', convertTo: '' })
  }

  render() {
    return (
      <form className={styles.wrapper}>
        <ChooseCurrenciesSection
          changeSelectOptionFn={this.changeSelectOptionFn}
          switchConvertedCurrencies={this.switchConvertedCurrencies}
          resetSelectedCurrencies={this.resetSelectedCurrencies}
          {...this.state}
        />
        <SumSection convertFrom={this.state.convertFrom} setSum={this.setSum} />
        <Button bigger margin="30px 0 0" onClick={this.showResult}>
          Przelicz
        </Button>
      </form>
    )
  }
}

export default CalcForm
