"use client";
import React, { useState } from 'react'
import styles from './sidebar.module.css'
import { menuItems } from '@/app/data';
import MenuLink from './menuLinks/menuLinks';
import Image from 'next/image';
import {motion} from 'framer-motion';
import { MdOutlineMenu } from "react-icons/md";



const Sidebar = () => {
  const [selected,setSelected]=useState(0);
  const [expanded,setExpanded]=useState(true);
  const sidebarVariants = {
    expanded: {
      left: '0',
    },
    collapsed: {
      left: '-60%',
    },
  };
  return (
    <>
<div className={styles.holder}>
    <div className={styles.bars} onClick={() => setExpanded(!expanded)}>
        <MdOutlineMenu />
      </div>
    <motion.div className={styles.container}
    variants={sidebarVariants}
    animate={expanded ? 'expanded' : 'collapsed'}
    initial={expanded ? 'expanded' : 'collapsed'}
    >
      
     <Image className={styles.logo} src="/lirauni.png" alt='Lira University logo' width={103} height={112}/>
      
      <ul className={styles.list}>
      {menuItems.map((item,index)=>(
        <li key={item.title}
        className={selected === index ? styles.activeItem : ''}
        onClick={() => setSelected(index)}
        >
        
          <MenuLink item={item} key={item.title} isActive={selected === index} /> 
       
        </li>
      ))}
      </ul>
    </motion.div>
    </div>
    </>
  )
}

export default Sidebar
