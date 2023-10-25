import { css, styled, keyframes} from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Shared from '../shared-style'

// Keyframes
const visibleAnimation = keyframes`
  from { opacity: 0; top: 50px; }
  to { opacity: 1; top: 0; }
`

// CSS
const animationName = css`
  animation-name: ${visibleAnimation};
`

export const BlogPostAuthor = styled.span`
  color: ${Shared.customBlue};
  margin-left: 6px;
  font-size: 18px;
`

export const BlogPostAuthorContainer = styled.div`
  font-weight: 600;
  display: flex;
  align-items: center;
`

export const BlogPostContainer = styled.div`
  
`

export const BlogPostContent = styled.div`
  position: relative;
  top: 50px;  
  opacity: 0;
  ${animationName}
  animation-duration: 0.5s;
  animation-delay: 1.6s;
  animation-fill-mode: forwards;
`

export const BlogPostDate = styled.p`
  display: flex;
  align-items: center;
`

export const BlogPostHeader = styled.div`
  margin: 64px 0;
  padding: 80px 56px;
  border: 2px ${Shared.customRed} solid;
  
  position: relative;
  top: 50px;  
  opacity: 0;
  ${animationName}
  animation-duration: 0.5s;
  animation-delay: 1.3s;
  animation-fill-mode: forwards;
`

export const BlogPostMetaContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const BlogPostTitle = styled.h1`
  color: #FFFFFF;
  text-align: center;
`
