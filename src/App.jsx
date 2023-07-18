import { useState } from 'react'

import './styles/App.css'
import CreateNavbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
       <CreateNavbar/>
    </>
  )
}

export default App
