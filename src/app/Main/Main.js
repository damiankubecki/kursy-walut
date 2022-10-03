import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import data from 'data/fetchData';
import styles from './Main.module.scss';
import HomeView from 'views/HomeView/HomeView';
import SearchView from 'views/SearchView/SearchView';
import CalculatorView from 'views/CalculatorView/CalculatorView';
import CuriositesView from 'views/CuriositesView/CuriositesView';

const Main = ({ closeInitScreen }) => {
  const [currenciesData, setCurrenciesData] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCurrenciesData = async () => {
      try {
        const response = await data.getLastRatesOfAllCurrecies();
        setCurrenciesData(response);
        setTimeout(() => {
          setLoading(false);
          closeInitScreen();
        }, 800);
      } catch (err) {
        throw new Error('An error occurred during main section render', err);
      }
    };

    fetchCurrenciesData();
  });

  return (
    <div className={styles.wrapper}>
      {!isLoading && (
        <Routes>
          <Route exact path="/" element={<HomeView currenciesData={currenciesData} />} />
          <Route exact path="/search" element={<SearchView currenciesCollection={currenciesData.data} />} />
          <Route path="/calculator" element={<CalculatorView currenciesData={currenciesData} />} />
          <Route path="/curiosites" element={<CuriositesView />} />
        </Routes>
      )}
    </div>
  );
};

export default Main;
