
import './App.css'
import { Outlet } from 'react-router'
import NavItems from './components/NavItems'
import Footer from './components/Footer'

function App() {
  
  return (
    <>
    <NavItems />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
