import { useState } from 'react'

import './styles/App.css'
import CreateNavbar from './components/Navbar'
import CreateLandingPage from './components/LandinPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
       <CreateNavbar/>
       <CreateLandingPage/>
    </>
  )
}

export default App
