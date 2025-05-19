"use client"

import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"
import { motion } from "framer-motion"

const data = [
  { name: "Jan", sales: 4000, target: 4400 },
  { name: "Feb", sales: 3000, target: 3800 },
  { name: "Mar", sales: 5000, target: 4800 },
  { name: "Apr", sales: 7800, target: 7000 },
  { name: "May", sales: 8900, target: 8200 },
  { name: "Jun", sales: 13900, target: 12000 },
  { name: "Jul", sales: 14900, target: 14000 },
]

const BarChart = ({ title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6"
    >
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{title}</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsBarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
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
            <Bar dataKey="sales" fill="#6366F1" radius={[4, 4, 0, 0]} barSize={30} />
            <Bar dataKey="target" fill="#E5E7EB" radius={[4, 4, 0, 0]} barSize={30} />
          </RechartsBarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}

export default BarChart
