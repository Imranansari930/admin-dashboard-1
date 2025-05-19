"use client"

import { motion } from "framer-motion"
import { Users, DollarSign, TrendingUp, BarChart2 } from "lucide-react"
import StatCard from "../components/dashboard/StatCard"
import LineChart from "../components/dashboard/LineChart"
import BarChart from "../components/dashboard/BarChart"
import ActivityList from "../components/dashboard/ActivityList"

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Welcome back, here's what's happening with your business today.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Users"
          value="24,521"
          icon={Users}
          change="12%"
          changeType="increase"
          bgColor="bg-blue-100 dark:bg-blue-900"
        />
        <StatCard
          title="Sales"
          value="$45,291"
          icon={DollarSign}
          change="8.2%"
          changeType="increase"
          bgColor="bg-green-100 dark:bg-green-900"
        />
        <StatCard
          title="Revenue"
          value="$12,389"
          icon={TrendingUp}
          change="1.8%"
          changeType="decrease"
          bgColor="bg-purple-100 dark:bg-purple-900"
        />
        <StatCard
          title="Bounce Rate"
          value="24.8%"
          icon={BarChart2}
          change="4.3%"
          changeType="increase"
          bgColor="bg-yellow-100 dark:bg-yellow-900"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LineChart title="User Growth" />
        <BarChart title="Sales vs Target" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ActivityList title="Recent Activity" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Stats</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">New Users</span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">78%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-indigo-600 h-2 rounded-full" style={{ width: "78%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Conversion Rate</span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">63%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: "63%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Retention</span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">42%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: "42%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Engagement</span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">89%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: "89%" }}></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Dashboard
