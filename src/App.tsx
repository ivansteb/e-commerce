import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import './index.css'
import MainContent from './components/MainContent'

function App() {
  return (
    <Router>
      <div className='flex h-screen bg-gray-900 text-purple-200'>
        <Sidebar />
        <div className="rounded w-full flex justify-between flex-wrap">
          <Routes>
            <Route path="/" element={<MainContent />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
