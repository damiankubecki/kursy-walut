import React from 'react'
import styles from './SearchView.module.scss'
import SearchForm from './SearchForm/SearchForm'
import SearchResultWindow from './SearchResultWindow/SearchResultWindow'
import Modal from '../../../elements/Modal/Modal'
import Data from '../../../../assets/data/fetchData'

class SearchView extends React.Component {
  state = {
    currenciesCollection: this.props.currenciesData,
    form: {
      currency: this.props.currenciesData.find(currency => currency.code === 'USD'),
      ratesNumber: 10,
    },
    result: {
      isWindowActive: false,
      data: {},
    },
    modal: {
      isActive: false,
      title: '',
      content: '',
    },
  }

  setCurrency = currencyCode => {
    const currency = this.state.currenciesCollection.find(
      currency => currency.code === currencyCode
    )
    this.setState(prevState => {
      return { form: { ...prevState.form, currency: currency } }
    })
  }
  setRatesNumber = number => {
    this.setState(prevState => {
      return { form: { ...prevState.form, ratesNumber: number } }
    })
  }
  openModal = ({ title = '', content = '' }) => {
    this.setState({
      modal: {
        isActive: true,
        title: title,
        content: content,
      },
    })
  }
  closeModal = () => this.setState({ modal: { isActive: false } })

  openResultWindow = (currency, ratesNumber) => {
    if (!currency && !ratesNumber) {
      return this.openModal({ title: '', content: 'Nie uzupełniono formularza' })
    }
    if (!currency) {
      return this.openModal({ title: 'Błąd', content: 'Nie wybrano waluty' })
    }
    if (!ratesNumber) {
      return this.openModal({
        content: 'Nie wpisano liczby ostatnich notowań',
      })
    }

    Data.getLastRatesOfCurrency(currency, ratesNumber).then(response => {
      this.setState({ result: { isWindowActive: true, data: { ...response } } })
    })
  }
  closeResultWindow = () => {
    this.setState({ result: { isWindowActive: false, data: {} } })
  }
  
  formSubmit = e => {
    e.preventDefault()

    const { form } = this.state
    this.openResultWindow(form.currency?.code, form.ratesNumber)
  }

  render() {
    const { currenciesCollection, form, result, modal } = this.state
    return (
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Szukaj waluty</h2>
        <SearchForm
          currenciesData={currenciesCollection}
          currency={form.currency}
          ratesNumber={form.ratesNumber}
          handleCurrencyChange={this.setCurrency}
          handleRatesNumberChange={this.setRatesNumber}
          submitFn={this.formSubmit}
        />
        {result.isWindowActive && (
          <SearchResultWindow
            closeWindow={this.closeResultWindow}
            {...result.data}
          />
        )}
        {modal.isActive && (
          <Modal
            title={modal.title}
            content={modal.content}
            onClose={this.closeModal}
          />
        )}
      </div>
    )
  }
}

export default SearchView
