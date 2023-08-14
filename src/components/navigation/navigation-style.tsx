import styled from 'styled-components'
import * as Shared from '../shared-style'

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
interface IMenuButtonProps {
  $isclose: boolean;
}

interface IMenuListProps {
  $mobilemenushow: boolean;
}

export const MobileMenuButton = styled.div<IMenuButtonProps>`
  width: 24px;
  height: 18px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  transition: all 0.5s;
  transform: ${props => props.$isclose ? 'rotate(180deg)' : 'rotate(0)'};
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
  position: relative;
`

export const MobileMenuList = styled.ul<IMenuListProps>`
  position: absolute;
  padding: 0;
  right: 0;
  top: 30px;
  transition: all 0.5s;

  opacity: ${props => props.$mobilemenushow ? '1' : '0'}
`

export const MobileMenuListItem = styled.li<IMenuListProps>`
  text-align: center;
  list-style-type: none;
  border: 1px solid #FFFFFF;
  border-top: none;
  padding: 8px 20px;
  cursor: ${props => props.$mobilemenushow ? 'pointer' : 'default'};
  background-color: ${Shared.mainBackgroundColor};
  pointer-events: ${props => props.$mobilemenushow ? 'auto' : 'none'};

  &:first-of-type {
    border-top: 1px solid #FFFFFF;
  }

  &:hover {
    background-color: ${Shared.customBlue};
  }
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