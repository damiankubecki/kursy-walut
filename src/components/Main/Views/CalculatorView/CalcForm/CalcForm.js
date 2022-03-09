import React from 'react'
import styles from './CalcForm.module.scss'
import ChooseCurrenciesSection from './ChooseCurrenciesSection/ChooseCurrenciesSection'
import SumSection from './SumSection/SumSection'
import Button from '../../../../elements/Button/Button'

class CalcForm extends React.Component {
  #currenciesData = this.props.currenciesData
  #initialCurrencies = {
    from: 'PLN',
    to: 'EUR',
  }

  state = {
    convertFrom: '',
    convertTo: '',
    currencies: [],
    sum: 0,
  }

  componentDidMount() {
    this.setState({
      convertFrom: this.#currenciesData.find(
        currency => currency.code === this.#initialCurrencies.from
      ),
      convertTo: this.#currenciesData.find(
        currency => currency.code === this.#initialCurrencies.to
      ),
      currencies: this.#currenciesData.map(currency => {
        const { from, to } = this.#initialCurrencies
        if (currency.code === from || to) {
          currency.used = true
        }
        return currency
      }),
    })
  }

  setSum = value => this.setState({ sum: value })
  changeSelectOptionFn = e => {
    const { currencies, convertFrom, convertTo } = this.state

    this.setState({
      [e.target.name]: currencies.find(currency => currency.code === e.target.value),
    })

    currencies.forEach(currency => {
      if (currency !== convertFrom && currency !== convertTo)
        return (currency.used = false)
    })
    const currentCurency = currencies.find(
      currency => currency.code === e.target.value
    )
    if (currentCurency) {
      currentCurency.used = true
    }
    this.setState(prevState => {
      return {
        ...prevState,
        currencies: currencies,
      }
    })
  }
  calculate = () => {
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
    if (this.calculate()) return this.props.setResultVisibility(true)
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
