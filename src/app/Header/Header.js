import React from 'react';
import styles from './Header.module.scss';
import Title from './Title/Title';
import Navigation from './Navigation/Navigation';

const Header = () => (
  <header className={styles.header}>
    <Title>Kursy Walut Online</Title>
    <Navigation />
  </header>
);

export default Header;
