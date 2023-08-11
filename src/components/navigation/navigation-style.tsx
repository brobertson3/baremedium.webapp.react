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

export const NavLinkList = styled.ul`

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