import React, { useEffect, useRef } from 'react'
import logo from '../../assets/logo.svg'

import { LogoDiv, LogoImg, LogoNav, LogoText, NavLink, NavLinkList } from './navigation-style'

interface INavigationProps {
  aboutMeSectionRef: React.RefObject<HTMLDivElement> | null;
  contactSectionRef: React.RefObject<HTMLDivElement> | null;
  projectsSectionRef: React.RefObject<HTMLDivElement> | null;
  setNavHeight: (e: number) => void;
}

const MainNavigation = ({ aboutMeSectionRef, contactSectionRef, projectsSectionRef, setNavHeight }: INavigationProps) => {
  const navigationHeader = useRef<HTMLElement | null>(null);

  const navigationLinks = [
    {
      text: 'About',
      section: aboutMeSectionRef,
    },
    {
      text: 'Projects',
      section: contactSectionRef,
    },
    {
      text: 'Contact',
      section: projectsSectionRef,
    },
  ]

  useEffect(() => {
    if(navigationHeader.current) {
      setNavHeight(navigationHeader.current.clientHeight)
    }
  }, [])

  const handleLinkClick = (text: string) => {
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

    if (currentRef?.current) {
      currentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header ref={navigationHeader}>
      <LogoNav>
        <LogoDiv>
          <LogoImg src={logo} alt='Bare Medium logo' />
          <LogoText>Bare Medium</LogoText>
        </LogoDiv>
        <NavLinkList style={{ listStyleType: 'none' }}>
          {
            navigationLinks.map((link) => (
              <NavLink onClick={() => handleLinkClick(link.text)}>{link.text}</NavLink>
            ))
          }
        </NavLinkList>
      </LogoNav>
    </header>
  )
}

export default MainNavigation