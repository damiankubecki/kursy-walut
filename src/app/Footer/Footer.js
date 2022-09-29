import React from 'react'
import styles from './Footer.module.scss'
import ProfilesNavigation from './ProfilesNavigation/ProfilesNavigation'

const Footer = () => (
  <footer className={styles.wrapper}>
    <p className={styles.paragraph}>created &amp; designed by Damian Kubecki</p>
    <ProfilesNavigation />
  </footer>
)

export default Footer
