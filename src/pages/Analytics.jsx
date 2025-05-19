"use client"

import { motion } from "framer-motion"

const Analytics = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Analytics</h1>
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
        <p className="text-gray-500 dark:text-gray-400">Analytics page content will go here.</p>
      </div>
    </motion.div>
  )
}

export default Analytics
