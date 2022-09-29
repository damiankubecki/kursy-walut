import React, { useState } from 'react';
import styles from './SearchView.module.scss';
import SearchForm from './SearchForm/SearchForm';
import ViewTitle from 'components/ViewTitle/ViewTitle';
import SearchResultWindow from './SearchResultWindow/SearchResultWindow';
import Data from 'data/fetchData';
import { findCurrencyByCode } from 'functions/findCurrencyByCode';
import { searchViewConfig } from 'config';

const { initialCurrencyCode, initialRatesNumber } = searchViewConfig;

class SearchView extends React.Component {
  currenciesCollection = this.props.currenciesCollection;

  state = {
    form: {
      selectedCurrency: findCurrencyByCode(this.currenciesCollection, initialCurrencyCode),
      ratesNumber: initialRatesNumber,
    },
    resultData: {},
  };

  setCurrency = currencyCode => {
    const currency = this.currenciesCollection.find(currency => currency.code === currencyCode);
    this.setState(prevState => {
      return { form: { ...prevState.form, selectedCurrency: currency } };
    });
  };

  setRatesNumber = number => {
    this.setState(prevState => {
      return { form: { ...prevState.form, ratesNumber: number } };
    });
  };

  setResultData = async (currency, ratesNumber) => {
    const lastCurrencyRates = await Data.getLastRatesOfCurrency(currency.code, ratesNumber);
    this.setState({ resultData: { ...currency, rates: lastCurrencyRates } });
  };

  isResultWindowActive = () => !!Object.keys(this.state.resultData).length;
  closeResultWindow = () => this.setState({ resultData: {} });

  submitForm = async () => {
    const { selectedCurrency, ratesNumber } = this.state.form;
    try {
      await this.setResultData(selectedCurrency, ratesNumber);
    } catch (err) {
      return `Dane waluty ${selectedCurrency.code} nie zostały znalezione`;
    }
  };

  render() {
    const { form, resultData } = this.state;
    return (
      <div className={styles.wrapper}>
        <ViewTitle title="Szukaj waluty" />
        <SearchForm
          currenciesCollection={this.currenciesCollection}
          handleCurrencyChange={this.setCurrency}
          handleRatesNumberChange={this.setRatesNumber}
          submitForm={this.submitForm}
          {...form}
        />
        {this.isResultWindowActive() && <SearchResultWindow closeWindowFn={this.closeResultWindow} {...resultData} />}
      </div>
    );
  }
}
export default SearchView;
