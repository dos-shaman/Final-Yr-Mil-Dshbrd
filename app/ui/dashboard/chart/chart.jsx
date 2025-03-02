"use client"

import styles from './chart.module.css'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: "Sun",
    FirstDiv: 4000,
    FourthDiv: 2400,
  },
  {
    name: "Mon",
    FirstDiv: 3000,
    FourthDiv: 1398,
  },
  {
    name: "Tue",
    FirstDiv: 2000,
    FourthDiv: 3800,
  },
  {
    name: "Wed",
    FirstDiv: 2780,
    FourthDiv: 3908,
  },
  {
    name: "Thu",
    FirstDiv: 1890,
    FourthDiv: 4800,
  },
  {
    name: "Fri",
    FirstDiv: 2390,
    FourthDiv: 3800,
  },
  {
    name: "Sat",
    FirstDiv: 3490,
    FourthDiv: 4300,
  },
];

const Chart = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Weekly Recap</h2>
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
          <YAxis />
          <Tooltip contentStyle={{background:"#151c2c", border:"none"}}/>
          <Legend />
          <Line type="monotone" dataKey="FirstDiv" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="FourthDiv" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart