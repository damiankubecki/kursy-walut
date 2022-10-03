import React from 'react';
import Loader from 'components/Loader/Loader';
import variables from 'theme/variables.scss';
import styles from './InitialScreen.module.scss';

const InitialScreen = () => {
  const { goldColor } = variables;

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Kursy walut online</h2>
      <p className={styles.subtitle}>created &amp; designed by Damian Kubecki</p>
      <Loader itemsColor={goldColor} animationSize={25} />
    </div>
  );
};

export default InitialScreen;
