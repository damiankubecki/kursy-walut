import React from 'react'
import styles from './CuriositesView.module.scss'
import Button from './../../../elements/Button/Button'
import { curiositesViewConfig } from './../../../../config'

class CuriositesView extends React.Component {
  state = {
    curiositesCollection: [...curiositesViewConfig.collection],
    currentCuriosityIndex: 0,
    currentText: '',
    isWriting: false,
    componentWillUnmount: false,
  }

  componentDidMount() {
    this.writeSentence()
  }
  componentWillUnmount() {
    for (let i = setTimeout(function () {}, 0); i > 0; i--) {
      window.clearInterval(i)
      window.clearTimeout(i)
      if (window.cancelAnimationFrame) window.cancelAnimationFrame(i)
    }
  }

  writeSentence = () => {
    const { curiositesCollection, currentCuriosityIndex, isWriting } = this.state
    if (isWriting) return

    this.clearExistText()
    this.setWriting(true)

    const sentence = curiositesCollection[currentCuriosityIndex].split('')
    let currentLetterIndex = 0

    let writing = setInterval(() => {
      this.addLetterToText(sentence[currentLetterIndex++])

      if (sentence.length === currentLetterIndex) {
        clearInterval(writing)
        this.setState(prevState => {
          if (currentCuriosityIndex + 1 === curiositesCollection.length) {
            return { ...prevState, currentCuriosityIndex: 0 }
          }
          return { ...prevState, currentCuriosityIndex: currentCuriosityIndex + 1 }
        })
        this.setWriting(false)
      }
    }, curiositesViewConfig.writingTime)
  }
  clearExistText = () => this.setState({ currentText: '' })
  setWriting = value => this.setState({ isWriting: value })
  addLetterToText = letter => {
    this.setState(prevState => {
      return {
        ...prevState,
        currentText: prevState.currentText + letter,
      }
    })
  }

  render() {
    const { currentText } = this.state
    return (
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Ciekawostki</h2>
        <p className={styles.curiosity}>
          {currentText}
          <span>|</span>
        </p>
        <Button bigger onClick={this.writeSentence}>
          Nowa ciekawostka
        </Button>
      </div>
    )
  }
}

export default CuriositesView
