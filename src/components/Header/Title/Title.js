import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Title.module.scss'

const Title = ({ children }) => (
  <NavLink to="/" className={styles.link}>
    <h1 className={styles.title}>{children}</h1>
  </NavLink>
)

export default Title
