import { useEffect, useRef, useState } from 'react'
import './App.css'
import Home from '../home/Home'
import MainNavigation from '../navigation/MainNavigation'
import Footer from '../footer/Footer'
import * as Styled from './app-style'
import useScreenSize from '../../hooks/useScreenSize'

function App() {
  const [navHeight, setNavHeight] = useState(0);
  const [mobileMenuShow, setMobileMenuShow] = useState(false)
  const aboutMeSectionRef = useRef<HTMLDivElement | null>(null);
  const contactSectionRef = useRef<HTMLDivElement | null>(null);
  const mainDivRef = useRef<HTMLDivElement | null>(null);
  const projectsSectionRef = useRef<HTMLDivElement | null>(null);

  const screenSize = useScreenSize();

  useEffect(() => {
    if (screenSize.width > 600) {
      setMobileMenuShow(false)
    }
  }, [screenSize])

  useEffect(() => {
    if (mainDivRef?.current) {
      mainDivRef.current.style.position = mobileMenuShow ? 'fixed' : 'relative'
    }
  }, [mobileMenuShow])

  const handleLinkClick = (text: string, isMobileNavItem: boolean) => {
    let currentRef = null;
    switch (text) {
      case 'About':
        currentRef = aboutMeSectionRef
        break;
      case 'Projects':
        currentRef = projectsSectionRef
        break;
      default:
        currentRef = contactSectionRef
    }
    
    if (mainDivRef?.current) {
      if (isMobileNavItem) {
        mainDivRef.current.style.position = !mobileMenuShow ? 'fixed' : 'relative'
        setMobileMenuShow(!mobileMenuShow)
      } else {
        mainDivRef.current.style.position = 'relative'
      }
    }

    if (currentRef?.current) {
      currentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <Styled.MainDiv ref={mainDivRef} style={{ display: 'flex', flexDirection: 'column', minHeight: `${screenSize.height}px`}}>
      <MainNavigation
        aboutMeSectionRef={aboutMeSectionRef}
        contactSectionRef={contactSectionRef}
        mobileMenuShow={mobileMenuShow}
        projectsSectionRef={projectsSectionRef}
        handleLinkClick={handleLinkClick}
        setMobileMenuShow={setMobileMenuShow}
        setNavHeight={setNavHeight}
      />
        <div style={{ flex: '1' }}>
          <Home
            aboutMeSectionRef={aboutMeSectionRef}
            contactSectionRef={contactSectionRef}
            navHeight={navHeight}
            projectsSectionRef={projectsSectionRef}
          />
        </div>
      <Footer />
    </Styled.MainDiv>
  )
}

export default App
