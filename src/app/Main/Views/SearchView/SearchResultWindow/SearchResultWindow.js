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
import variables from 'theme/variables.scss'

const { goldColor, goldRGBAColor } = variables

const SearchResultWindow = ({
  closeWindowFn,
  code,
  currency,
  flag,
  wikipediaLink,
  rates,
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
      <div className={styles.content}>
        <p className={styles.title}>
          Wyniki ostatnich {rates.length} notowań dla waluty {currency} - {code}
        </p>
        {flag && (
          <a href={wikipediaLink || null} target="_blank" rel="noreferrer">
            <img src={flag} height="30px" alt={'country flag'} />
          </a>
        )}
        <Line options={options} data={data} />
        <button className={styles.closeBtn} onClick={closeWindowFn}>
          <i className="fas fa-times"></i>
        </button>
      </div>
    </div>
  )
}

export default SearchResultWindow
