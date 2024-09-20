import React from 'react'
import styles from './../ui/dashboardui/dashboard.module.css'
import Card from '../ui/dashboardui/card/card'
import {Chart1,Chart2, Charts} from '../ui/dashboardui/charts/charts'
import { cardData } from '../data'

const Dashboard = () => {
  return (
    <>
    <div className={styles.shapes}>
    <div className={styles.cards}>
    {cardData.map((item, index) => (
        <Card
          key={index}
          icon={item.icon}
          number={item.number}
          title={item.title}
        />
      ))}

    </div>
    <div className={styles.charts}>
    <Chart1 />
    <Chart2 />
    
    </div>
    
    <Charts/>
    </div>
    </>
  )
}

export default Dashboard
