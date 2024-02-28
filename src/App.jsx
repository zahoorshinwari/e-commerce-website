
import './App.css'
import { Outlet } from 'react-router'
import NavItems from './components/NavItems'

function App() {
  
  return (
    <>
    <NavItems />
      <Outlet />
    </>
  )
}

export default App
