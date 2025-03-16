import React ,{ useState } from "react"

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home.jsx'
import Dashboard from './Dashboard.jsx'

function App() {
  let [allProducts,setAllProducts] = useState([])
  return (
    <div className="min-h-screen bg-gray-50">
      <BrowserRouter>
        <nav className="bg-indigo-600 text-white p-4 shadow-md">
          <div className="container mx-auto flex flex-col md:flex-row md:justify-between md:items-center">
            <h2 className="text-2xl font-bold mb-2 md:mb-0">
              Project Management
            </h2>
            <ul className="flex space-x-6">
              <li>
                <Link 
                  to="/" 
                  className="hover:text-indigo-200 transition-colors duration-200 font-medium"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/Dashboard" 
                  className="hover:text-indigo-200 transition-colors duration-200 font-medium"
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        
        <main className="container mx-auto p-4 mt-6">
          <Routes>
            <Route path="/" exact element={<Home allProducts = {allProducts} />} />
            <Route path="/Dashboard" element={<Dashboard allProducts = {allProducts} setAllProducts = {setAllProducts} />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App