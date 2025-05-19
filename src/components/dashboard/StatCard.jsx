"use client"

import { motion } from "framer-motion"
import classNames from "classnames"

const StatCard = ({ title, value, icon: Icon, change, changeType, bgColor }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 flex flex-col"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</h3>
        <div className={classNames("p-2 rounded-lg", bgColor || "bg-indigo-100 dark:bg-indigo-900")}>
          <Icon size={20} className="text-indigo-600 dark:text-indigo-400" />
        </div>
      </div>
      <div className="flex items-end justify-between">
        <div>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
          {change && (
            <div className="flex items-center mt-2">
              <span
                className={classNames(
                  "text-xs font-medium",
                  changeType === "increase" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400",
                )}
              >
                {changeType === "increase" ? "+" : ""}
                {change}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">vs last month</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default StatCard
