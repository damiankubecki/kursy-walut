import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import data from 'data/fetchData';
import styles from './Main.module.scss';
import HomeView from './Views/HomeView/HomeView';
import SearchView from './Views/SearchView/SearchView';
import CalculatorView from './Views/CalculatorView/CalculatorView';
import CuriositesView from './Views/CuriositesView/CuriositesView';

const Main = ({ closeInitScreen }) => {
  const [currenciesData, setCurrenciesData] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCurrenciesData = async () => {
      try {
        const response = await data.getLastRatesOfAllCurrecies();
        setCurrenciesData(response);
        setLoading(false);
        setTimeout(() => closeInitScreen(), 800);
      } catch (err) {
        throw new Error('An error occurred in rendering main section');
      }
    };

    fetchCurrenciesData();
  }, []);

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
