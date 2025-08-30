import DashboardPage from './pages/DashboardPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <div className='App'>
        <BrowserRouter >
          <Routes>
            <Route path='/' element={<h2>Home</h2>}/>
            <Route path='/register' element={<RegisterPage />}/>
            <Route path='/login' element={<LoginPage />}/>
            <Route path='/dashboard' element={<DashboardPage />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
