import React, { useState, useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2'

import { Banner, Card } from '../../components/UI'

const Overview = () => {
  const [chartData, setChartData] = useState({})

  const chart = () => {
    setChartData({
      labels: [
        'Groceries',
        'Restaurant',
        'Transport',
        'Health',
        'Gifts',
        'Family',
        'Shopping',
        'Insurance',
        'Leisure'
      ],
      datasets: [
        {
          label: 'level of thickness',
          data: [10, 20, 30, 40, 50, 60, 70, 80, 90],
          backgroundColor: [
            '#006d96',
            '#405aba',
            '#ffa634',
            '#00a845',
            '#ff5454',
            '#433773',
            '#00b7ce',
            '#885b4d',
            '#aa3e62'
          ],
          borderWidth: 4
        }
      ]
    })
  }

  useEffect(() => {
    chart()
  }, [])

  return (
    <div>
      <Banner title='Overview' />

      <div className='row'>
        <div className='col col-sm-12 mb-2'>
          <Card>
            <Doughnut
              data={chartData}
              options={{
                responsive: true,
                legend: false,
                title: { text: 'Expenses by Category', display: true }
              }}
            />
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Overview
