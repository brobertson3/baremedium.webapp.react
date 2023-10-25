import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { styled } from 'styled-components'
import * as Shared from '../shared-style'

interface IFAProps {
  width: number;
  height: number;
  $iconcolor: string;
}

export const BlogQueryContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 96px;
`

export const CustomFontAwesomeIcon = styled(FontAwesomeIcon)<IFAProps>`
  width: ${props => props.width}px; 
  height: ${props => props.height}px;
  color: ${props => props.$iconcolor}
`