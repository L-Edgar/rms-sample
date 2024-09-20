"use client";
import React from 'react'
import styles from './menuLink.module.css'
import Link from 'next/link'


const MenuLink = ({item,isActive}) => {
  
  return (
    <Link href={item.link} className={`${styles.container} ${isActive ? styles.active : ''}`}>
      {item.icon}
      {item.title}
    </Link>
  )
}

export default MenuLink
