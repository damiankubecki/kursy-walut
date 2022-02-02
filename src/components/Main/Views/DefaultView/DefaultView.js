import React from 'react'
import MainContext from '../../context'
import styles from './DefaultView.module.scss'

const DefaultView = () => (
  <MainContext.Consumer>
    {context => (<h1 onClick={() => context.changeTitle('nowy')}>Widok domyślny</h1>)}
  </MainContext.Consumer>
)

export default DefaultView
