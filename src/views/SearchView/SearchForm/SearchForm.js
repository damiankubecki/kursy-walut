import React from 'react';
import styles from './SearchForm.module.scss';
import CurrenciesSelectList from 'components/CurrenciesSelectList/CurrenciesSelectList';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import { searchViewConfig } from 'config';

const SearchForm = ({
  currenciesCollection,
  selectedCurrencyCode,
  handleCurrencyChange,
  handleRatesNumberChange,
  handleSubmit,
}) => {
  const { initialRatesNumber } = searchViewConfig;

  return (
    <>
      <form className={styles.wrapper} onSubmit={handleSubmit}>
        <div className={styles.selectContainer}>
          <CurrenciesSelectList
            currenciesCollection={currenciesCollection}
            selectedCurrencyCode={selectedCurrencyCode}
            onChange={handleCurrencyChange}
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
            defaultValue={initialRatesNumber}
            width="75px"
            onChange={handleRatesNumberChange}
          >
            Ilość ostatnich notowań:
          </Input>
        </div>
        <Button>Szukaj</Button>
      </form>
    </>
  );
};

export default SearchForm;
