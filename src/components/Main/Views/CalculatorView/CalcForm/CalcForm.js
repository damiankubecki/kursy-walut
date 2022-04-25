import React from 'react'
import styles from './CalcForm.module.scss'
import { calculateResult } from './functions/calculateResult'
import ChooseCurrenciesSection from './ChooseCurrenciesSection/ChooseCurrenciesSection'
import SumSection from './SumSection/SumSection'
import Button from '../../../../elements/Button/Button'
import { findCurrencyByCode } from '../../../../../assets/functions/findCurrencyByCode'
import { calculatorViewConfig } from './../../../../../config'

const { initialCurrenciesCodes } = calculatorViewConfig

class CalcForm extends React.Component {
  state = {
    fromCurrency: findCurrencyByCode(
      this.props.currenciesCollection,
      initialCurrenciesCodes.from
    ),
    toCurrency: findCurrencyByCode(
      this.props.currenciesCollection,
      initialCurrenciesCodes.to
    ),
    sum: null,
  }

  setCurrency = e => {
    if (!this.state.hasOwnProperty(e.target.name))
      throw new Error(`Unknown '${e.target.name}' state property`)

    const { currenciesCollection } = this.props
    this.setState({
      [e.target.name]: findCurrencyByCode(currenciesCollection, e.target.value),
    })
  }
  clearSelectedCurrencies = () => {
    this.setState({ fromCurrency: null, toCurrency: null })
  }
  switchSelectedCurrencies = () => {
    const previousData = { ...this.state }
    this.setState({
      fromCurrency: previousData.toCurrency,
      toCurrency: previousData.fromCurrency,
    })
  }

  setSum = value => this.setState({ sum: value })
  clearSum = () => this.setState({ sum: null })

  submit = e => {
    e.preventDefault()
    const { setFormInfos, setResult, clearResult, openModal } = this.props
    clearResult()

    const result = calculateResult(this.state)
    if (result.error) return openModal(<p>{result.error}</p>)

    setFormInfos(this.state)
    setResult(result.exchangeRate, result.resultValue)
  }

  render() {
    const { currenciesCollection } = this.props
    const { fromCurrency } = this.state
    return (
      <form className={styles.wrapper} onSubmit={this.submit}>
        <ChooseCurrenciesSection
          currenciesCollection={currenciesCollection}
          setCurrency={this.setCurrency}
          switchSelectedCurrencies={this.switchSelectedCurrencies}
          clearSelectedCurrencies={this.clearSelectedCurrencies}
          {...this.state}
        />
        <SumSection
          fromCurrencyCode={fromCurrency?.code}
          setSum={this.setSum}
          clearSum={this.clearSum}
        />
        <Button bigger margin="30px 0 0" type="submit">
          Przelicz
        </Button>
      </form>
    )
  }
}

export default CalcForm
