import { useState } from 'react'
import './App.css'
import Home from '../home/Home'
import MainNavigation from '../navigation/MainNavigation'
// import * as Styled from './app-style'

function App() {
  const [navHeight, setNavHeight] = useState(0);

  return (
    <>
      <MainNavigation setNavHeight={setNavHeight} />
      <Home navHeight={navHeight} />
    </>
  )
}

export default App
