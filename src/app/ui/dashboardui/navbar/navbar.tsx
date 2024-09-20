"use client";
import React from 'react'
import { FaUser } from "react-icons/fa";
import styles from "./navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>LIRA UNIVERSITY</h1>
        <h4>Research Management System</h4>
      </div>
      <div className={styles.profile}>
        <p className={styles.link}>Director</p>
        <FaUser className={styles.icon}/>
      </div>
    </div>
  )
}

export default Navbar
