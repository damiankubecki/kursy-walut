import React from 'react'
import styles from './Footer.module.scss'
import ProfilesNavigation from './ProfilesNavigation/ProfilesNavigation'

const Footer = () => (
  <div className={styles.wrapper}>
    <p className={styles.paragraph}>created by Damian Kubecki</p>
    <ProfilesNavigation />
  </div>
)

export default Footer
