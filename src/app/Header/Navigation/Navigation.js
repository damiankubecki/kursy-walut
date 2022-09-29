import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navigation.module.scss'

const Navigation = () => (
  <nav className={styles.wrapper}>
    <NavLink
      to="/search"
      className={({ isActive }) =>
        isActive ? styles.navItemActive : styles.navItem
      }
    >
      <i className="fas fa-search-dollar"></i>
    </NavLink>
    <NavLink
      to="/calculator"
      className={({ isActive }) =>
        isActive ? styles.navItemActive : styles.navItem
      }
    >
      <i className="fas fa-calculator"></i>
    </NavLink>
    <NavLink
      to="/curiosites"
      className={({ isActive }) =>
        isActive ? styles.navItemActive : styles.navItem
      }
    >
      <i className="far fa-lightbulb"></i>
    </NavLink>
  </nav>
)

export default Navigation
