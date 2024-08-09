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
function App() {
  const { currentUser } = useSelector((state)=>state.user)
  const loadUser = useLoadUser()
  useEffect(()=>{
    loadUser()
  },[])
  return (
     <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/login' element={<Login/>} />
        <Route path='/details' element={<JuiceDetails/>} />
      </Routes>
     </Router>
  )
}

export default App



