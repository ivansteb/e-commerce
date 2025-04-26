import { BrowserRouter as Router } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import './index.css'

function App() {
  return (
    <Router>
      <div className='bg-gray-900 h-screen flex flex-col justify-center gap-4 text-purple-200'>
        <Sidebar />
      </div>
    </Router>
  )
}

export default App
