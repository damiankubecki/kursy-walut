import React from 'react'
import styles from './SearchForm.module.scss'
import CurrenciesSelectList from '../../../../elements/CurrenciesSelectList/CurrenciesSelectList'
import Input from '../../../../elements/Input/Input'
import Button from '../../../../elements/Button/Button'
import Modal from '../../../../elements/Modal/Modal'

class SearchForm extends React.Component {
  state = {
    modal: { isActive: false, title: '', content: '' },
  }

  openModal = ({ title, text }) => {
    this.setState({
      modal: {
        isActive: true,
        title: title,
        text: text,
      },
    })
  }
  closeModal = () => this.setState({ modal: { isActive: false } })
  submit = async e => {
    e.preventDefault()

    const { currency, ratesNumber, openResultWindow } = this.props
    const modalTitle = 'Błąd'
    if (!currency && !ratesNumber) {
      return this.openModal({
        title: modalTitle,
        text: 'Nie uzupełniono formularza',
      })
    }
    if (!currency) {
      return this.openModal({ title: modalTitle, text: 'Nie wybrano waluty' })
    }
    if (!ratesNumber) {
      return this.openModal({
        title: modalTitle,
        text: 'Nie wpisano liczby ostatnich notowań',
      })
    }
    const error = await openResultWindow()
    if (error) this.openModal({ title: modalTitle, text: error })
  }

  render() {
    const {
      currenciesCollection,
      ratesNumber,
      currency,
      handleCurrencyChange,
      handleRatesNumberChange,
    } = this.props
    const { modal } = this.state
    return (
      <>
        <form className={styles.wrapper} onSubmit={e => this.submit(e)}>
          <div className={styles.selectContainer}>
            <CurrenciesSelectList
              currenciesCollection={currenciesCollection}
              selectedCurrency={currency}
              onChange={e => handleCurrencyChange(e.target.value)}
            >
              Waluta:
            </CurrenciesSelectList>
          </div>
          <div className={styles.inputContainer}>
            <Input
              type={'number'}
              maxLength={2}
              defaultValue={ratesNumber}
              onChange={e => handleRatesNumberChange(e.target.value * 1)}
              onClear={() => handleRatesNumberChange(null)}
            >
              Ilość ostatnich notowań:
            </Input>
          </div>
          <Button bigger>Szukaj</Button>
        </form>
        {modal.isActive && (
          <Modal title={modal.title} text={modal.text} onClose={this.closeModal} />
        )}
      </>
    )
  }
}
export default SearchForm
