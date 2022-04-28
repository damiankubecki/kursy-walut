import React from 'react'
import styles from './ViewTitle.module.scss'

const ViewTitle = ({title, subtitle}) => {
  return (
    <div className={styles.viewTitle}>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  )
}

export default ViewTitle
