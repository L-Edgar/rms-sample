import React from 'react'
import Sidebar from '../ui/dashboardui/sidebar/sidebar'
import Navbar from '../ui/dashboardui/navbar/navbar'
import styles from '../ui/dashboardui/dashboard.module.css'
import Footer from '../ui/dashboardui/footer/footer'

const Layout = ({children}) => {
  return (
    <>
    
   
    <div className={styles.navbar}>
        <Navbar/>
        
      </div>
      <div className={styles.content}>
      <div className={styles.menu}>
        <Sidebar/>
      </div>
      <div className={styles.mainContent}>
      {children}
        
        <Footer/>
      </div>
     </div>
      
    
    </>
  )
}

export default Layout
