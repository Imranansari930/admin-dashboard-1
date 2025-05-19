"use client"

import { useState } from "react"
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"
import { motion } from "framer-motion"

const data = [
  { name: "Jan", users: 400, newUsers: 240 },
  { name: "Feb", users: 300, newUsers: 139 },
  { name: "Mar", users: 500, newUsers: 280 },
  { name: "Apr", users: 780, newUsers: 390 },
  { name: "May", users: 890, newUsers: 480 },
  { name: "Jun", users: 1390, newUsers: 830 },
  { name: "Jul", users: 1490, newUsers: 740 },
]

const LineChart = ({ title }) => {
  const [activeIndex, setActiveIndex] = useState(null)

  const handleMouseMove = (data) => {
    if (data && data.activeTooltipIndex) {
      setActiveIndex(data.activeTooltipIndex)
    }
  }

  const handleMouseLeave = () => {
    setActiveIndex(null)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6"
    >
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{title}</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsLineChart
            data={data}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="name" tick={{ fill: "#6b7280" }} axisLine={{ stroke: "#e5e7eb" }} />
            <YAxis tick={{ fill: "#6b7280" }} axisLine={{ stroke: "#e5e7eb" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                border: "none",
                borderRadius: "0.5rem",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="users"
              stroke="#6366F1"
              strokeWidth={3}
              dot={{ r: 4, strokeWidth: 2 }}
              activeDot={{ r: 8, strokeWidth: 0, fill: "#6366F1" }}
            />
            <Line
              type="monotone"
              dataKey="newUsers"
              stroke="#10B981"
              strokeWidth={3}
              dot={{ r: 4, strokeWidth: 2 }}
              activeDot={{ r: 8, strokeWidth: 0, fill: "#10B981" }}
            />
          </RechartsLineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}

export default LineChart
