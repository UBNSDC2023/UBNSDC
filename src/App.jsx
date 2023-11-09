import { useState } from 'react'
import nsdcLogo from '../assets/nsdc-logo.png'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from './components/AppLayout'
import About from './pages/About/About'
import BoardMembePage from './pages/Board/BoardMembePage'

function App() {
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<AppLayout/>}>
        
      <Route index path="/" element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='meet-the-board' element={<BoardMembePage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

  // const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <div>
  //       <a href="https://nebigdatahub.org/nsdc/" target="_blank">
  //         <img src={nsdcLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h2>Welcome to UB National Student Data Corps</h2>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         Click {count}
  //       </button>
        
  //     </div>
  //   </>
  // )