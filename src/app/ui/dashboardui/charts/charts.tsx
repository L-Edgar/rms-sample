"use client";
import React from 'react'
import styles from './charts.module.css'
import { data1,data,data2,data3 } from '@/app/data';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  BarChart,
  Bar,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid
} from 'recharts';



export const Chart1 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.chart}>
      <h1>Grant Research</h1>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart width={500} height={300} data={data1}>
          
          <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="grant" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="special" stroke="#82ca9d" />
        </LineChart>
        
      </ResponsiveContainer>
      </div>
     <div className={styles.key}>
      <div className={styles.key1}>
        <div className={styles.shape1}></div>
        <span>Grant</span>
      </div>
      <div className={styles.key2}>
      <div className={styles.shape2}></div>
        <span>Special</span>
      </div>
     </div>
    </div>
  )
}
export const Chart2 = () => {
  return (
    <div className={styles.container1}>
      <div className={styles.chart}>
      <h1>Grant Research</h1>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Line yAxisId="left" type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line yAxisId="right" type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
      </div>
      <div className={styles.key}>
      <div className={styles.key1}>
        <div className={styles.shape1}></div>
        <span>Grant</span>
      </div>
      <div className={styles.key2}>
      <div className={styles.shape2}></div>
        <span>Special</span>
      </div>
     </div>
    </div>
  )
}
export const Charts = () => {
  return (
    <div className={styles.container2}>
      
      <h1>Grant Research</h1>
      <div className={styles.charts}>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data2}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        </LineChart>
      </ResponsiveContainer>
      <ResponsiveContainer height="90%" className={styles.barchart}>
        <BarChart
          width={500}
          height={300}
          data={data3}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Submitted" stackId="a" fill="#8884d8" />
          <Bar dataKey="Rejected" stackId="a" fill="#82ca9d" />
          <Bar dataKey="Approved" fill="#ffc658" />
        </BarChart>
      </ResponsiveContainer>
      </div>
    </div>
  )
}

