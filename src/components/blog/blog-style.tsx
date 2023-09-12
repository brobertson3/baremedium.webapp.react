import { css, styled, keyframes} from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Shared from '../shared-style'

interface IFAProps {
  width: number;
  height: number;
  $iconcolor?: string;
}

interface ISearchBoxProps {
  $isnotexpanded: boolean;
}

// Keyframes
const visibleAnimation = keyframes`
  from { opacity: 0; top: 50px; }
  to { opacity: 1; top: 0; }
`

// CSS
const animationName = css`
  animation-name: ${visibleAnimation};
`

export const CustomFontAwesomeIcon = styled(FontAwesomeIcon)<IFAProps>`
  width: ${props => props.width}px; 
  height: ${props => props.height}px;
  ${props => props.$iconcolor ? `color: ${props.$iconcolor};` : ''}
`

export const SearchBox = styled.input`
  width: calc(100% - 104px);
  padding: 8px 88px 8px 16px;
  border-radius: 100px;
  font-size: 24px;
  transition: width ease-in-out 0.5s;
  outline: 0;
  border-width: 0;
`

export const SearchBoxButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 80px;
  background-color: ${Shared.greyBackgroundColor};
  border: none;
  border-radius: 100px;
`

export const SearchBoxContainer = styled.div<ISearchBoxProps>`
  width: ${props => props.$isnotexpanded ? '30%' : '100%'};
  position: relative;
  transition: width 0.5s ease-in-out;
`

export const Title = styled.h1`
  margin: 16px 0;
  color: #fff;
  text-align: center;
  
  position: relative;
  top: 50px; 
  opacity: 0;
  ${animationName}
  animation-duration: 0.7s;
  animation-delay: 1.2s;
  animation-fill-mode: forwards;

  @media (max-width: 1068px) {
    font-size: 3rem;
  }

  @media (max-width: 600px) {
    font-size: 2.2rem;
  }
`

export const TitleContainer = styled.div`
  padding: 160px 0 80px;
`