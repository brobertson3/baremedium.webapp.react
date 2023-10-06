import { useRef, useState } from 'react'
import './App.css'
import Home from '../home/Home'
import MainNavigation from '../navigation/MainNavigation'
import Footer from '../footer/Footer'
import * as Styled from './app-style'
import useScreenSize from '../../hooks/useScreenSize'

function App() {
  const [navHeight, setNavHeight] = useState(0);
  const [noScroll, setNoScroll] = useState(false);
  const [mobileMenuShow, setMobileMenuShow] = useState(false)
  const aboutMeSectionRef = useRef<HTMLDivElement | null>(null);
  const contactSectionRef = useRef<HTMLDivElement | null>(null);
  const mainDivRef = useRef<HTMLDivElement | null>(null);
  const projectsSectionRef = useRef<HTMLDivElement | null>(null);

  const screenSize = useScreenSize();

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
        mainDivRef.current.style.position = !mobileMenuShow ? 'fixed' : 'static'
        setMobileMenuShow(!mobileMenuShow)
        setNoScroll(!mobileMenuShow)
      } else {
        mainDivRef.current.style.position = 'static'
      }
    }

    if (currentRef?.current) {
      currentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <Styled.MainDiv ref={mainDivRef} $noscroll={noScroll} style={{ display: 'flex', flexDirection: 'column', minHeight: `${screenSize.height}px`}}>
      <MainNavigation
        aboutMeSectionRef={aboutMeSectionRef}
        contactSectionRef={contactSectionRef}
        mobileMenuShow={mobileMenuShow}
        projectsSectionRef={projectsSectionRef}
        handleLinkClick={handleLinkClick}
        setMobileMenuShow={setMobileMenuShow}
        setNavHeight={setNavHeight}
        setNoScroll={setNoScroll}
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
