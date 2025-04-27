import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import './index.css'
import MainContent from './components/MainContent'
import ProductPage from './components/ProductPage'
import NotFound from './components/NotFoundPage'

function App() {
  return (
    <Router>
      <div className='flex bg-gray-900 text-purple-200'>
        <Sidebar />
        <div className="rounded w-full flex justify-between flex-wrap">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
