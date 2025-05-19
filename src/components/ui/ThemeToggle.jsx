"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "./ThemeProvider"
import { motion } from "framer-motion"

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5">
        {theme === "light" ? (
          <motion.div
            initial={{ scale: 0.5, opacity: 0, rotate: -180 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Moon size={20} />
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0.5, opacity: 0, rotate: 180 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Sun size={20} />
          </motion.div>
        )}
      </div>
    </button>
  )
}

export default ThemeToggle
