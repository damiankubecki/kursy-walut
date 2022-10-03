import React, { useContext, useMemo } from 'react';
import styles from './CurrencyItem.module.scss';
import variables from 'theme/variables.scss';
import { ModalContext } from 'contexts/contexts';

const CurrencyItem = ({ currency, code, symbol, country, mid, flag, wikipediaLink }) => {
  const openModal = useContext(ModalContext);
  const { darkBlackColor } = variables;
  const modalContent = useMemo(
    () => (
      <div>
        {flag && <img src={flag} alt="Flaga" height="40px" style={{ padding: '0 0 10px' }} />}
        <ul style={{ listStyle: 'none' }}>
          <li>Kod waluty: {code}</li>
          {symbol && <li>Symbol: {symbol}</li>}
          <li>Kraj/strefa: {country}</li>

          <li>Akutalny kurs: {mid}</li>
          {wikipediaLink && (
            <li>
              Wikipedia:{' '}
              <a href={wikipediaLink} target="_blank" rel="noreferrer">
                Otwórz
              </a>
            </li>
          )}
        </ul>
      </div>
    ),
    [code, symbol, country, mid, flag, wikipediaLink]
  );

  const handleClick = () => openModal(`Informacje o walucie ${code}`, modalContent);

  return (
    <>
      <button className={styles.wrapper} onClick={handleClick}>
        <p className={styles.code}>{code}</p>
        <p className={styles.mid}>{mid.toFixed(4)}</p>
        <p className={styles.name}>{currency}</p>
        <div
          className={styles.flag}
          style={{
            backgroundImage: `url(${flag || null})`,
            backgroundColor: darkBlackColor,
          }}
        ></div>
      </button>
    </>
  );
};

export default CurrencyItem;
