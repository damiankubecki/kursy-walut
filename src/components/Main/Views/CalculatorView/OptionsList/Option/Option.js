import React from 'react'
import styles from './Option.module.scss'

const Option = ({ code, currency }) => <option value={code}>{code} - {currency}</option>

export default Option
