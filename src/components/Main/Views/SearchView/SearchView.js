import React from 'react'
import styles from './SearchView.module.scss'
import SearchForm from './SearchForm/SearchForm'
import SearchResultWindow from './SearchResultWindow/SearchResultWindow'
import Data from '../../../../assets/data/fetchData'

class SearchView extends React.Component {
  state = {
    currenciesCollection: this.props.currenciesData,
    currency: this.props.currenciesData.find(currency => currency.code === 'USD'),
    ratesNumber: 10,
    resultWindowActive: false,
    resultData: {},
  }

  setCurrency = currencyCode => {
    const currency = this.state.currenciesCollection.find(
      currency => currency.code === currencyCode
    )
    this.setState({ currency: currency })
  }
  setRatesNumber = number => this.setState({ ratesNumber: number })

  openResultWindow = (currency, ratesNumber) => {
    Data.getLastRatesOfCurrency(currency, ratesNumber).then(response => {
      this.setState({ resultWindowActive: true, resultData: { ...response } })
    })
  }
  closeResultWindow = () => this.setState({ resultWindowActive: false })

  formSubmit = e => {
    e.preventDefault()

    const { currency, ratesNumber } = this.state
    this.openResultWindow(currency.code, ratesNumber)
  }

  render() {
    const {
      currenciesCollection,
      currency,
      ratesNumber,
      resultWindowActive,
      resultData,
    } = this.state
    return (
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Szukaj waluty</h2>
        <SearchForm
          currenciesData={currenciesCollection}
          currency={currency}
          ratesNumber={ratesNumber}
          handleCurrencyChange={this.setCurrency}
          handleRatesNumberChange={this.setRatesNumber}
          submitFn={this.formSubmit}
        />
        {resultWindowActive && (
          <SearchResultWindow closeWindow={this.closeResultWindow} {...resultData} />
        )}
      </div>
    )
  }
}

export default SearchView
