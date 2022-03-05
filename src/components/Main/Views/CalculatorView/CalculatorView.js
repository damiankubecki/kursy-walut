import React from 'react'
import styles from './CalculatorView.module.scss'
import CalcForm from './CalcForm/CalcForm'

class CalculatorView extends React.Component {
  #initialCurrencies = {
    from: 'PLN',
    to: 'EUR',
  }

  state = {
    convertFrom: this.props.currenciesData.find(
      currency => currency.code === this.#initialCurrencies.from
    ),
    convertTo: this.props.currenciesData.find(
      currency => currency.code === this.#initialCurrencies.to
    ),
    currencies: this.props.currenciesData,
    sum: 0,
    result: 0,
  }

  selectFn = e => {
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
  handleSumChange = e => this.setState({ [e.target.name]: e.target.value * 1 })
  switchConvertedCurrencies = e => {
    const oldData = {
      convertFrom: this.state.convertFrom,
      convertTo: this.state.convertTo,
    }
    this.setState({
      convertFrom: oldData.convertTo,
      convertTo: oldData.convertFrom,
    })
  }

  render() {
    const { convertFrom, convertTo, currencies, result } = this.state
    return (
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Kalkulator</h2>
        <CalcForm
          convertFrom={convertFrom}
          convertTo={convertTo}
          currencies={currencies}
          selectFn={this.selectFn}
          handleSumChange={this.handleSumChange}
          switchConvertedCurrencies={this.switchConvertedCurrencies}
        />
        <p className={styles.result}>{result}</p>
      </div>
    )
  }
}

export default CalculatorView
