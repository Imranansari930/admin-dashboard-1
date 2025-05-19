"use client"

import { motion } from "framer-motion"
import { User, Download, FileText, Mail, AlertCircle } from "lucide-react"

const activities = [
  {
    id: 1,
    user: "John Doe",
    action: "created a new user",
    time: "2 minutes ago",
    icon: User,
    iconColor: "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400",
  },
  {
    id: 2,
    user: "Sarah Smith",
    action: "downloaded the monthly report",
    time: "10 minutes ago",
    icon: Download,
    iconColor: "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400",
  },
  {
    id: 3,
    user: "Michael Brown",
    action: "submitted a new ticket",
    time: "1 hour ago",
    icon: FileText,
    iconColor: "bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400",
  },
  {
    id: 4,
    user: "Emily Johnson",
    action: "sent an email to all users",
    time: "3 hours ago",
    icon: Mail,
    iconColor: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-400",
  },
  {
    id: 5,
    user: "System",
    action: "detected unusual login activity",
    time: "5 hours ago",
    icon: AlertCircle,
    iconColor: "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-400",
  },
]

const ActivityList = ({ title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-md"
    >
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.1 * index }}
            className="p-4 flex items-start"
          >
            <div className={`p-2 rounded-lg mr-4 ${activity.iconColor}`}>
              <activity.icon size={16} />
            </div>
            <div>
              <p className="text-sm text-gray-900 dark:text-white">
                <span className="font-medium">{activity.user}</span> {activity.action}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{activity.time}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <button className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline font-medium">
          View all activity
        </button>
      </div>
    </motion.div>
  )
}

export default ActivityList
