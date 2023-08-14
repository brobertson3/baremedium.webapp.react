import React, { useEffect, useRef, useState } from 'react'
import logo from '../../assets/logo.svg'
import useScreenSize from '../../hooks/useScreenSize'

import * as Styled from './navigation-style'

interface INavigationProps {
  aboutMeSectionRef: React.RefObject<HTMLDivElement> | null;
  contactSectionRef: React.RefObject<HTMLDivElement> | null;
  projectsSectionRef: React.RefObject<HTMLDivElement> | null;
  setNavHeight: (e: number) => void;
}

const MainNavigation = ({ aboutMeSectionRef, contactSectionRef, projectsSectionRef, setNavHeight }: INavigationProps) => {
  const navigationHeader = useRef<HTMLElement | null>(null);
  const screenSize = useScreenSize();
  const [isMobile, setIsMobile] = useState(false)
  const [mobileMenuShow, setMobileMenuShow] = useState(false)
  const [isMobileMenuClose, setIsMobileMenuClose] = useState(false)

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
    if (navigationHeader.current) {
      setNavHeight(navigationHeader.current.clientHeight)
    }
  }, [])

  useEffect(() => {
    if (screenSize.width <= 600) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [screenSize])

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

  const handleMobileMenuClick = () => {
    setMobileMenuShow(!mobileMenuShow)
    setIsMobileMenuClose(!mobileMenuShow)
  }

  return (
    <header ref={navigationHeader}>
      <Styled.LogoNav>
        <Styled.LogoDiv>
          <Styled.LogoImg src={logo} alt='Bare Medium logo' />
          <Styled.LogoText>Bare Medium</Styled.LogoText>
        </Styled.LogoDiv>
        {
          !isMobile && (
            <Styled.NavLinkList>
              {
                navigationLinks.map((link, index) => (
                  <Styled.NavLink key={`navigationLink${index}`} onClick={() => handleLinkClick(link.text)}>{link.text}</Styled.NavLink>
                ))
              }
            </Styled.NavLinkList>
          )
        }
        {
          isMobile && (
            <Styled.MobileMenuDiv>
              <Styled.MobileMenuButton onClick={handleMobileMenuClick} $isclose={isMobileMenuClose}>
                <Styled.MobileMenuButtonLine $isclose={isMobileMenuClose}/>
                <Styled.MobileMenuButtonLine $isclose={isMobileMenuClose}/>
                <Styled.MobileMenuButtonLine $isclose={isMobileMenuClose}/>
              </Styled.MobileMenuButton>
              <Styled.MobileMenuList $mobilemenushow={isMobileMenuClose}>
                {
                  navigationLinks.map((mobileLink, index) => (
                    <Styled.MobileMenuListItem
                      key={`mobileNavigationLink${index}`}
                      onClick={() => handleLinkClick(mobileLink.text)}
                      $mobilemenushow={isMobileMenuClose}
                    >
                      {mobileLink.text}
                    </Styled.MobileMenuListItem>
                  ))
                }
              </Styled.MobileMenuList>
            </Styled.MobileMenuDiv>
          )
        }
      </Styled.LogoNav>
    </header>
  )
}

export default MainNavigation