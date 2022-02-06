import React from 'react'
import styles from './ProfilesNavigation.module.scss'
import variables from './../../../assets/variables.scss'
import LinkButton from './LinkButton/LinkButton'

const { facebookColor, githubColor, linkedInColor } = variables

const ProfilesNavigation = () => (
  <div className={styles.wrapper}>
    <LinkButton
      href="https://www.facebook.com/damian.kubecki111/"
      iconLink="fab fa-facebook"
      title="Odwiedź profil facebook"
      hoverColor={facebookColor}
    >
      Facebook
    </LinkButton>
    <LinkButton
      href="https://github.com/damiankubecki"
      iconLink="fab fa-github"
      title="Odwiedź profil github"
      hoverColor={githubColor}
    >
      Github
    </LinkButton>
    <LinkButton
      href="https://www.linkedin.com/in/damiankubecki"
      iconLink="fab fa-linkedin"
      title="Odwiedź profil LinkedIn"
      hoverColor={linkedInColor}
    >
      LinkedIn
    </LinkButton>
  </div>
)

export default ProfilesNavigation
