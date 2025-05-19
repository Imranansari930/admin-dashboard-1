"use client"

import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { motion } from "framer-motion"
import Sidebar from "./components/layout/Sidebar"
import Navbar from "./components/layout/Navbar"
import Dashboard from "./pages/Dashboard"
import Analytics from "./pages/Analytics"
import Users from "./pages/Users"
import Settings from "./pages/Settings"
import { ThemeProvider } from "./components/ui/ThemeProvider"

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <Router>
      <ThemeProvider>
        <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
          <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
          <div className="flex flex-col flex-1 overflow-hidden">
            <Navbar toggleSidebar={toggleSidebar} />
            <motion.main
              className="flex-1 overflow-y-auto p-4 md:p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/users" element={<Users />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </motion.main>
          </div>
        </div>
      </ThemeProvider>
    </Router>
  )
}

export default App
