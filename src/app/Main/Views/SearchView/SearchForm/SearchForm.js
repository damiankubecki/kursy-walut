import React from 'react';
import styles from './SearchForm.module.scss';
import CurrenciesSelectList from 'components/CurrenciesSelectList/CurrenciesSelectList';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';

class SearchForm extends React.Component {
  state = {
    modal: {
      isActive: false,
      content: '',
    },
  };

  openModal = content => {
    this.setState({
      modal: {
        isActive: true,
        content: content,
      },
    });
  };
  closeModal = () => this.setState({ modal: { isActive: false } });

  submit = async e => {
    e.preventDefault();

    const { selectedCurrency, ratesNumber, submitForm } = this.props;

    if (!selectedCurrency && !ratesNumber) {
      return this.openModal(<p>Nie uzupełniono formularza</p>);
    }
    if (!selectedCurrency) {
      return this.openModal(<p>Nie wybrano waluty</p>);
    }
    if (!ratesNumber) {
      return this.openModal(<p>Nie wpisano liczby ostatnich notowań</p>);
    }
    const error = await submitForm();
    if (error) this.openModal(<p>{error}</p>);
  };

  render() {
    const {
      currenciesCollection,
      ratesNumber,
      selectedCurrency,
      handleCurrencyChange,
      handleRatesNumberChange,
    } = this.props;
    const { modal } = this.state;
    return (
      <>
        <form className={styles.wrapper} onSubmit={this.submit}>
          <div className={styles.selectContainer}>
            <CurrenciesSelectList
              currenciesCollection={currenciesCollection}
              selectedCurrencyCode={selectedCurrency?.code}
              onChange={e => handleCurrencyChange(e.target.value)}
            >
              Waluta:
            </CurrenciesSelectList>
          </div>
          <div className={styles.inputContainer}>
            <Input
              type={'number'}
              maxLength={2}
              step={1}
              min={3}
              max={99}
              defaultValue={ratesNumber}
              width="75px"
              onChange={e => handleRatesNumberChange(e.target.value * 1)}
              onClear={() => handleRatesNumberChange(null)}
            >
              Ilość ostatnich notowań:
            </Input>
          </div>
          <Button>Szukaj</Button>
        </form>
        {modal.isActive && (
          <Modal
            title={'Błąd'}
            content={modal.content}
            onClose={this.closeModal}
          />
        )}
      </>
    );
  }
}
export default SearchForm;
