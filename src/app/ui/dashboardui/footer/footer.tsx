import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <h5>Developed and managed by Kanlyte Uganda Limited</h5>
      <div className={styles.links}>
        <ul>
            <li>Privacy</li>
            <li>Help</li>
            <li>Contact</li>
            <li>Support</li>
            <li>About</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
