import React from 'react'
import PropTypes from 'prop-types'
import Animation from 'react-spinners/ClipLoader'
import styles from './Loader.module.scss'

const Loader = ({ active, itemsColor, fontSize, animationSize, children }) => (
  <>
    {active && (
      <div className={styles.wrapper}>
        <p style={{ color: itemsColor, fontSize: fontSize }}>
          {children}
        </p>
        <Animation loading={true} color={itemsColor} size={animationSize} />
      </div>
    )}
  </>
)

Loader.propTypes = {
  active: PropTypes.bool,
  itemsColor: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired,
  animationSize: PropTypes.number.isRequired,
}

Loader.defaultProps = {
  active: true,
}

export default Loader
