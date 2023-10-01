
import './App.css'
import './index.css'

import Home from './Pages/Home'
import Contact from './Pages/Contact'
import { Routes,Route } from 'react-router-dom'
function App() {


  return (
    <div>
    
    
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
     </Routes>
    
    </div>
  )
}

export default App
