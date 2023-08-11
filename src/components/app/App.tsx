import { useRef, useState } from 'react'
import './App.css'
import Home from '../home/Home'
import MainNavigation from '../navigation/MainNavigation'
// import * as Styled from './app-style'

function App() {
  const [navHeight, setNavHeight] = useState(0);
  const aboutMeSectionRef = useRef<HTMLDivElement | null>(null);
  const projectsSectionRef = useRef<HTMLDivElement | null>(null);
  const contactSectionRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <MainNavigation
        aboutMeSectionRef={aboutMeSectionRef}
        contactSectionRef={contactSectionRef}
        projectsSectionRef={projectsSectionRef}
        setNavHeight={setNavHeight}
      />
      <Home
        aboutMeSectionRef={aboutMeSectionRef}
        contactSectionRef={contactSectionRef}
        navHeight={navHeight}
        projectsSectionRef={projectsSectionRef}
      />
    </>
  )
}

export default App
