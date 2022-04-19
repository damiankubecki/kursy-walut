import React from 'react'
import PropTypes from 'prop-types'
import Animation from 'react-spinners/ClipLoader'
import styles from './Loader.module.scss'

const Loader = ({ itemsColor, fontSize, animationSize, children }) => (
  <div className={styles.wrapper}>
    <p style={{ color: itemsColor, fontSize: fontSize }}>{children}</p>
    <Animation loading={true} color={itemsColor} size={animationSize} />
  </div>
)

Loader.propTypes = {
  itemsColor: PropTypes.string.isRequired,
  animationSize: PropTypes.number.isRequired,
}

export default Loader
