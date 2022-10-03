import React from 'react';
import PropTypes from 'prop-types';
import styles from './CurrenciesSelectList.module.scss';

const CurrenciesSelectList = ({
  listName,
  currenciesCollection,
  selectedCurrencyCode,
  anotherSelectedCurrency,
  children,
  ...props
}) => {
  currenciesCollection.sort((a, b) => a.category - b.category);

  return (
    <div className={styles.wrapper}>
      {children && <p className={styles.title}>{children}</p>}
      <select className={styles.select} name={listName} value={selectedCurrencyCode || 'default'} {...props}>
        <option value="default">Wybierz walutę</option>
        {anotherSelectedCurrency ? (
          <>
            {currenciesCollection
              .filter(currency => currency !== anotherSelectedCurrency)
              .map(currency => (
                <option key={currency.code} value={currency.code}>
                  {currency.code} - {currency.country || currency.currency}
                </option>
              ))}
          </>
        ) : (
          <>
            {currenciesCollection.map(currency => (
              <option key={currency.code} value={currency.code}>
                {currency.code} - {currency.country || currency.currency}
              </option>
            ))}
          </>
        )}
      </select>
    </div>
  );
};

CurrenciesSelectList.propTypes = {
  listName: PropTypes.string,
  currenciesCollection: PropTypes.array.isRequired,
  selectedCurrencyCode: PropTypes.string,
  children: PropTypes.string,
  calculator: PropTypes.object,
};

export default CurrenciesSelectList;
