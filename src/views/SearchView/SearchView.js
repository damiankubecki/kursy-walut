import React, { useContext, useState } from 'react';
import styles from './SearchView.module.scss';
import Data from 'data/fetchData';
import { findCurrencyByCode } from 'functions/findCurrencyByCode';
import { searchViewConfig } from 'config';
import ViewTitle from 'components/ViewTitle/ViewTitle';
import SearchForm from './SearchForm/SearchForm';
import SearchResultWindow from './SearchResultWindow/SearchResultWindow';
import { ModalContext } from 'contexts/contexts';

const SearchView = ({ currenciesCollection }) => {
  const openModal = useContext(ModalContext);
  const { initialCurrencyCode, initialRatesNumber } = searchViewConfig;
  const [isResultWindowActive, setResultWindowActivity] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState(
    findCurrencyByCode(currenciesCollection, initialCurrencyCode)
  );
  const [ratesNumber, setRatesNumber] = useState(initialRatesNumber);
  const [result, setResult] = useState({});

  const handleCurrencyChange = e => {
    const foundCurrency = currenciesCollection.find(currency => currency.code === e.target.value);
    setSelectedCurrency(foundCurrency);
  };

  const handleRatesNumberChange = e => setRatesNumber(e.target.value);

  const fetchResultData = async () => {
    const currencyRates = await Data.getLastRatesOfCurrency(selectedCurrency.code, ratesNumber);
    setResult({ ...selectedCurrency, rates: currencyRates });
  };

  const handleFormSubmit = async e => {
    e.preventDefault();

    if (!selectedCurrency && !ratesNumber) return openModal('Błąd', <p>Nie uzupełniono formularza</p>);
    if (!selectedCurrency) return openModal('Błąd', <p>Nie wybrano waluty</p>);
    if (!ratesNumber) return openModal('Błąd', <p>Nie wpisano liczby ostatnich notowań</p>);

    try {
      await fetchResultData();
      setResultWindowActivity(true);
    } catch (e) {
      return `Dane waluty ${selectedCurrency.code} nie zostały znalezione`;
    }
  };

  return (
    <div className={styles.wrapper}>
      <ViewTitle title="Szukaj waluty" />
      <SearchForm
        currenciesCollection={currenciesCollection}
        selectedCurrencyCode={selectedCurrency?.code}
        handleCurrencyChange={handleCurrencyChange}
        handleRatesNumberChange={handleRatesNumberChange}
        handleSubmit={handleFormSubmit}
      />
      {isResultWindowActive && (
        <SearchResultWindow handleWindowClose={() => setResultWindowActivity(false)} {...result} />
      )}
    </div>
  );
};

export default SearchView;
