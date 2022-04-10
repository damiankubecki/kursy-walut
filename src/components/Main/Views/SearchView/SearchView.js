import React from 'react'
import styles from './SearchView.module.scss'
import SearchForm from './SearchForm/SearchForm'

class SearchView extends React.Component {
  state = {
    currenciesCollection: this.props.currenciesData,
    currency: null,
    ratesNumber: 10,
  }

  setCurrency = currencyCode => {
    const currency = this.state.currenciesCollection.find(
      currency => currency.code === currencyCode
    )
    this.setState({ currency: currency })
  }
  setRatesNumber = number => this.setState({ ratesNumber: number })

  render() {
    const { currenciesCollection, currency, ratesNumber } = this.state
    return (
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Szukaj waluty</h2>
        <SearchForm
          currenciesData={currenciesCollection}
          currency={currency}
          ratesNumber={ratesNumber}
          handleCurrencyChange={this.setCurrency}
          handleRatesNumberChange={this.setRatesNumber}
        />
      </div>
    )
  }
}

export default SearchView
