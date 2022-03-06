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
  submit = e => {
    e.preventDefault()

    const { convertFrom, convertTo, sum } = this.state

    if (convertFrom && convertTo && sum) {
      const exchangeRate = convertFrom.mid / convertTo.mid
      this.props.calculate(sum, exchangeRate, convertFrom.code, convertTo.code)
    } else {
      this.props.clearResult() 
    }
  }

  render() {
    const { convertFrom, convertTo, currencies } = this.state
    return (
      <form className={styles.wrapper}>
        <ChooseCurrenciesSection
          convertFrom={convertFrom}
          convertTo={convertTo}
          currencies={currencies}
          selectFn={this.selectFn}
          switchConvertedCurrencies={this.switchConvertedCurrencies}
        />
        <SumSection
          convertFrom={convertFrom}
          handleSumChange={this.handleSumChange}
        />
        <Button bigger margin="30px 0 0" onClick={this.submit}>
          Przelicz
        </Button>
      </form>
    )
  }
}

export default CalcForm
