import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import './index.css'
import MainContent from './components/pages/MainContent'
import ProductPage from './components/pages/ProductPage'
import NotFound from './components/pages/NotFoundPage'
import TopSellers from './components/TopSellers'
import PopularBlogs from './components/PopularBlogs'

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

          <div>
            <TopSellers />
            <PopularBlogs />
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
