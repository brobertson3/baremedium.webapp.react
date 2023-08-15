import styled from 'styled-components'
import * as Shared from '../shared-style'

interface IMenuButtonProps {
  $isclose: boolean;
}

interface IMenuListProps {
  $mobilemenushow: boolean;
}

interface IMobileOverlayProps {
  $showoverlay: boolean;
}

export const LogoDiv = styled.div`
  display: flex;
  align-items: center;
`

export const LogoImg = styled.img`
  height: auto;
  width: 40px;
`

export const LogoNav = styled.nav`
  display: flex;
  justify-content: space-between;
`

export const LogoText = styled.h3`
  display: inline-block;
  margin: 0 16px;
`

export const MobileMenuButton = styled.div<IMenuButtonProps>`
  width: 24px;
  height: 18px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  transition: all 0.5s;
  transform: ${props => props.$isclose ? 'rotate(180deg)' : 'rotate(0)'};
  z-index: 999;
  position: absolute;
  top: 30px;
  right: 30px;
`

export const MobileMenuButtonLine = styled.div<IMenuButtonProps>`
  width: 100%;
  height: 2px;
  background-color: #FFFFFF;
  transition: all 0.5s;

  &:nth-child(1) {
    transform: ${props => props.$isclose ? 'rotate(45deg) translate(5px, 5px)' : 'rotate(0) translate(0, 0)'};
  }

  &:nth-child(2) {
    opacity: ${props => props.$isclose ? '0' : '1'};
  }

  &:nth-child(3) {
    transform: ${props => props.$isclose ? 'rotate(-45deg) translate(7px, -6px)' : 'rotate(0) translate(0, 0)'};
  }
`

export const MobileMenuDiv = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  top: 0;
  margin-top: 0;
  z-index: 950;
`

export const MobileMenuList = styled.ul<IMenuListProps>`
  position: absolute;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  right:  ${props => props.$mobilemenushow ? '0' : '-100vw'};
  top: 0;
  transition: all 0.5s;
  background-color: #424952;
  background-color: #000000;
  height: 100vh;
  width: 60vw;
  min-width: 280px;
  opacity: 1;
  margin-top: 0;
  transition: all 0.7s ease-in-out;
`

export const MobileMenuListDiv = styled.div`
  width: 100%;
`

export const MobileMenuListItem = styled.li<IMenuListProps>`
  text-align: center;
  list-style-type: none;
  padding: 24px 0;
  cursor: ${props => props.$mobilemenushow ? 'pointer' : 'default'};
  pointer-events: ${props => props.$mobilemenushow ? 'auto' : 'none'};
  font-size: 3rem;

  &:hover {
    background-color: ${Shared.customBlue};
  }

  @media (max-width: 461px) {
    font-size: 3rem;
  }
`

export const MobileOverlay = styled.div<IMobileOverlayProps>`
  position: fixed;
  inset: 0;
  z-index: ${props => props.$showoverlay ? '900' : '-999'};
  transition: all 1s;
  background: ${props => props.$showoverlay ? 'rgba(80, 142, 241, 0.3)' : 'transparent'};
  backdrop-filter: ${props => props.$showoverlay ? 'saturate(180%) blur(10px)' : 'none'};
`

export const NavLinkList = styled.ul`
  list-style-type: none;
`

export const NavLink = styled.li`
  display: inline-block;
  margin-right: 24px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    border-bottom: solid 2px #ffffff;
  }

  &:last-of-type {
    margin-right: 0;
    background: ${Shared.customRed};
    padding: 4px 12px;
    border-radius: 4px;
    transition: background-color 0.5s;

    &:hover {
      background-color: ${Shared.customBlue};
      border-bottom: none;
    }
  }
`