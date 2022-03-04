import React from 'react'
import styles from './CalculatorView.module.scss'
import OptionsList from './OptionsList/OptionsList'
import Button from '../../../elements/Button/Button'

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
  switchConvert = () => {
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
        <div className={styles.currenciesForm}>
          <OptionsList
            listName="convertFrom"
            currencies={currencies}
            selectedCurrency={this.state.convertFrom}
            otherSelectedCurrency={convertTo}
            selectFn={this.selectFn}
          >
            Mam
          </OptionsList>
          <Button noBorder bigger margin="5px" onClick={this.switchConvert}>
            <i className="fa-solid fa-right-left"></i>
          </Button>
          <OptionsList
            listName="convertTo"
            currencies={currencies}
            selectedCurrency={convertTo}
            otherSelectedCurrency={convertFrom}
            selectFn={this.selectFn}
          >
            Chcę otrzymać
          </OptionsList>
        </div>
        <div className={styles.sumForm}>
          <p className={styles.paragraph}>Kwota</p>
          <div className={styles.sumContainer}>
            <input
              className={styles.sum}
              type="number"
              name="sum"
              placeholder="Wpisz kwotę"
              onChange={this.handleSumChange}
            />
            <p className={styles.code}>{convertFrom.code}</p>
          </div>
        </div>
        <Button bigger margin="30px 0 0">
          Przelicz
        </Button>
        <p className={styles.result}>{result}</p>
      </div>
    )
  }
}

export default CalculatorView
