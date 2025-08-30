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
            <Route path='/dashboard' element={<h2>Dashboard</h2>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
