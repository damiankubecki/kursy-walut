import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';

const Navigation = () => (
  <nav className={styles.wrapper}>
    <NavLink to="/search" className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
      <i className="fas fa-search-dollar"></i> Szukaj waluty
    </NavLink>
    <NavLink to="/calculator" className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
      <i className="fas fa-calculator"></i> Kalkulator
    </NavLink>
    <NavLink to="/curiosites" className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
      <i className="far fa-lightbulb"></i> Ciekawostki
    </NavLink>
  </nav>
);

export default Navigation;
