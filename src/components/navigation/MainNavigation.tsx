import React, { useEffect, useRef } from 'react'
import logo from '../../assets/logo.svg'

import { LogoDiv, LogoImg, LogoNav, LogoText, NavLink, NavLinkList } from './navigation-style'

interface INavigationProps {
  setNavHeight: (e: number) => void;
}

const MainNavigation = ({setNavHeight}: INavigationProps) => {
  const navigationHeader = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if(navigationHeader.current) {
      setNavHeight(navigationHeader.current.clientHeight)
    }
  }, [])

  return (
    <header ref={navigationHeader}>
      <LogoNav>
        <LogoDiv>
          <LogoImg src={logo} alt='Bare Medium logo' />
          <LogoText>Bare Medium</LogoText>
        </LogoDiv>
        <NavLinkList style={{ listStyleType: 'none' }}>
          <NavLink>About</NavLink>
          <NavLink>Projects</NavLink>
          <NavLink>Contact</NavLink>
        </NavLinkList>
      </LogoNav>
    </header>
  )
}

export default MainNavigation