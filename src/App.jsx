import { useState } from 'react'

import './styles/App.css'
import CreateNavbar from './components/Navbar'
import CreateLandingPage from './components/LandinPage'
import CreateProducts from './components/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
       <CreateNavbar/>
       <CreateLandingPage/>
       <CreateProducts/>
    </>
  )
}

export default App
