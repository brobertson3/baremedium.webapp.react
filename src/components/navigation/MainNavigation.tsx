import React, { useEffect, useRef, useState } from 'react'
import logo from '../../assets/logo.svg'
import useScreenSize from '../../hooks/useScreenSize'

import * as Styled from './navigation-style'

interface INavigationProps {
  aboutMeSectionRef: React.RefObject<HTMLDivElement> | null;
  contactSectionRef: React.RefObject<HTMLDivElement> | null;
  mobileMenuShow: boolean;
  projectsSectionRef: React.RefObject<HTMLDivElement> | null;
  handleLinkClick: (e: string) => void;
  setMobileMenuShow: (e: boolean) => void;
  setNavHeight: (e: number) => void;
  setNoScroll: (e: boolean) => void;
}

const MainNavigation = ({ aboutMeSectionRef, contactSectionRef, mobileMenuShow, projectsSectionRef, handleLinkClick, setMobileMenuShow, setNavHeight, setNoScroll }: INavigationProps) => {
  const navigationHeader = useRef<HTMLElement | null>(null);
  const screenSize = useScreenSize();
  const [isMobile, setIsMobile] = useState(false)

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
    if (!navigationHeader?.current) {
      return
    }
    if (navigationHeader?.current) {
      setNavHeight(navigationHeader.current.clientHeight)
    }
  }, [navigationHeader?.current?.clientHeight])

  useEffect(() => {
    if (screenSize.width <= 600) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [screenSize])

  const handleMobileMenuClick = () => {
    setMobileMenuShow(!mobileMenuShow)
    setNoScroll(!mobileMenuShow)
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
            <>
              {
                <Styled.MobileOverlay $showoverlay={mobileMenuShow} />
              }
              <Styled.MobileMenuDiv>
                <Styled.MobileMenuButton onClick={handleMobileMenuClick} $isclose={mobileMenuShow}>
                  <Styled.MobileMenuButtonLine $isclose={mobileMenuShow}/>
                  <Styled.MobileMenuButtonLine $isclose={mobileMenuShow}/>
                  <Styled.MobileMenuButtonLine $isclose={mobileMenuShow}/>
                </Styled.MobileMenuButton>

                <Styled.MobileMenuList $mobilemenushow={mobileMenuShow} style={{ minHeight: `${screenSize.height}px` }}>
                  <Styled.MobileMenuListDiv>
                    {
                      navigationLinks.map((mobileLink, index) => (
                        <Styled.MobileMenuListItem
                          key={`mobileNavigationLink${index}`}
                          onClick={() => handleLinkClick(mobileLink.text)}
                          $mobilemenushow={mobileMenuShow}
                        >
                          {mobileLink.text}
                        </Styled.MobileMenuListItem>
                      ))
                    }
                  </Styled.MobileMenuListDiv>
                </Styled.MobileMenuList>
              </Styled.MobileMenuDiv>
            </>
          )
        }
      </Styled.LogoNav>
    </header>
  )
}

export default MainNavigation