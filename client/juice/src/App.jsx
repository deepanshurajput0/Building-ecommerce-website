import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import JuiceDetails from './pages/juiceDetails'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import useLoadUser from './pages/LoadUser'
import PrivateRoutes from './components/PrivateRoutes'
import { Toaster } from 'react-hot-toast'
function App() {
  const { isAuthenticated, currentUser, loading } = useSelector((state)=>state.user)
  const loadUser = useLoadUser()
  useEffect(()=>{
    loadUser()
  },[])
  return (
     <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
            <Route path='/register' element={
              <PrivateRoutes>
                <Register/>
              </PrivateRoutes>
            } />
            <Route path='/login' element={
              <PrivateRoutes>
                <Login/>
              </PrivateRoutes>
            } />
        <Route path='/details' element={<JuiceDetails/>} />
      </Routes>
      <Toaster/>
     </Router>
  )
}

export default App



