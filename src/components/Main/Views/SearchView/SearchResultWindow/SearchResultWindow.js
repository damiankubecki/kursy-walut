import React from 'react'
import styles from './SearchResultWindow.module.scss'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import variables from './../../../../../assets/variables.scss'

const { goldColor, goldRGBAColor } = variables

const SearchResultWindow = ({
  closeWindow,
  code,
  currency,
  flag,
  rates,
  wikipediaLink,
}) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  }
  const data = {
    labels: rates.map(rate => rate.date),
    datasets: [
      {
        label: '',
        data: rates.map(rate => rate.mid),
        borderColor: `${goldColor}`,
        backgroundColor: `${goldRGBAColor}`,
      },
    ],
  }

  return (
    <div className={styles.background}>
      <div className={styles.contentWrapper}>
        <p className={styles.title}>
          Wyniki ostatnich {rates.length} notowań dla waluty {currency} - {code}
        </p>
        {flag && (
          <a href={wikipediaLink || null} target="_blank" rel="noreferrer">
            <img src={flag} height="30px" alt={'country flag'} />
          </a>
        )}
        <Line options={options} data={data} />
        <button className={styles.closeBtn} onClick={closeWindow}>
          <i className="far fa-times-circle"></i>
        </button>
      </div>
    </div>
  )
}

export default SearchResultWindow
