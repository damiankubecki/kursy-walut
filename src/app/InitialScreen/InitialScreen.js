import React from 'react';
import Loader from 'components/Loader/Loader';
import variables from 'assets/variables.scss';
import styles from './InitialScreen.module.scss';

const { goldColor } = variables;

const InitialScreen = () => (
  <div className={styles.wrapper}>
    <h2 className={styles.title}>Kursy walut online</h2>
    <p className={styles.subtitle}>created &amp; designed by Damian Kubecki</p>
    <Loader itemsColor={goldColor} animationSize={25}></Loader>
  </div>
);

export default InitialScreen;
