"use client"

import { useState } from "react"
import { NavLink } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import classNames from "classnames"
import {
  LayoutDashboard,
  BarChart2,
  Users,
  Settings,
  HelpCircle,
  MessageSquare,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

const menuItems = [
  { id: 1, label: "Dashboard", icon: LayoutDashboard, path: "/" },
  { id: 2, label: "Analytics", icon: BarChart2, path: "/analytics" },
  { id: 3, label: "Users", icon: Users, path: "/users" },
  { id: 4, label: "Settings", icon: Settings, path: "/settings" },
  { id: 5, label: "Help", icon: HelpCircle, path: "/help" },
  { id: 6, label: "Messages", icon: MessageSquare, path: "/messages", badge: 5 },
]

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [hoveredItem, setHoveredItem] = useState(null)

  return (
    <>
      <motion.div
        className={classNames("fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden", { hidden: isOpen })}
        onClick={toggleSidebar}
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      />

      <motion.div
        className="fixed top-0 left-0 h-full bg-gray-900 text-gray-300 z-30 flex flex-col shadow-xl"
        initial={{ width: isOpen ? 240 : 80 }}
        animate={{ width: isOpen ? 240 : 80 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-800">
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center"
              >
                <div className="h-8 w-8 rounded-md bg-indigo-600 flex items-center justify-center mr-2">
                  <span className="font-bold text-white">A</span>
                </div>
                <h1 className="text-xl font-bold text-white">AdminPro</h1>
              </motion.div>
            )}
          </AnimatePresence>
          <button onClick={toggleSidebar} className="p-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300">
            {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    classNames("flex items-center px-3 py-2.5 rounded-lg transition-colors", {
                      "bg-indigo-600 text-white": isActive,
                      "hover:bg-gray-800": !isActive,
                      "justify-center": !isOpen && hoveredItem !== item.id,
                    })
                  }
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <item.icon size={20} className="flex-shrink-0" />
                  <AnimatePresence>
                    {(isOpen || hoveredItem === item.id) && (
                      <motion.span
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "auto" }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ duration: 0.2 }}
                        className={classNames("ml-3 whitespace-nowrap", { hidden: !isOpen && hoveredItem !== item.id })}
                      >
                        {item.label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                  {item.badge && (
                    <span className="ml-auto bg-red-500 text-white text-xs font-medium px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-4 border-t border-gray-800">
          <NavLink
            to="/logout"
            className="flex items-center px-3 py-2.5 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <LogOut size={20} />
            <AnimatePresence>
              {isOpen && (
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.2 }}
                  className="ml-3"
                >
                  Logout
                </motion.span>
              )}
            </AnimatePresence>
          </NavLink>
        </div>
      </motion.div>
    </>
  )
}

export default Sidebar
