import React from 'react'
import styles from './card.module.css'


const Card = ({icon,number,title}) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.text}>
        <span className={styles.number}>{number}</span>
        <span className={styles.title}>{title}</span>
      </div>
    </div>
  )
}

export default Card
