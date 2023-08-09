import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const customBlue = '#3967B1';
const hoverLinkColor = customBlue;
const projectScreenShotBackgroundColor = '#508ef1';
const secondaryTitleColor = customBlue;

interface FAProps{
  width: number;
  height: number;
}

export const CustomFontAwesomeIcon = styled(FontAwesomeIcon)<FAProps>`
  width: ${props => props.width}px; 
  height: ${props => props.height}px;
`

interface HeaderProps {
  height: number;
}

export const Header = styled.header<HeaderProps>`
  margin: 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: ${props => props.height}px;
`

export const HeadingUnderline = styled.div`
  width: 30%;
  height: 0.5px;
  background-color: #FFFFFF;
  margin-bottom: 40px;
`

export const IconLink = styled.a`
  color: #FFFFFF;

  &:hover {
    color: ${hoverLinkColor};
  }
`

export const Main = styled.main`
  margin-left: 96px;
  margin-right: 96px;
`

export const ProjectContainerDiv = styled.div`
  position: relative;
`

export const ProjectContentDiv = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 50%;
`

export const ProjectDescription = styled.p`
  margin: 0;
  width: 100%;
`

export const ProjectDescriptionDiv = styled.div`
  background-color: #424952;
  padding: 24px;
  border-radius: 8px;
`

export const ProjectImg = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 8px;
  mix-blend-mode: multiply;
  filter: contrast(100%) brightness(100%) opacity(150%) saturate(10%);
  transition: all 0.5s;

  &:hover {
    mix-blend-mode: normal;
    filter: none;
  }
`

export const ProjectLinksList = styled.div`
  textAlign: right;
`

export const ProjectScreenshotDiv = styled.div`
  width: 60%;
  height: 400px;
  background-color: ${projectScreenShotBackgroundColor};
  border-radius: 8px;
`

export const ProjectSkillList = styled.ul`
  list-style-type: none;
  padding: 0;
  text-align: right;
`

export const ProjectSkillListItem = styled.li`
  display: inline-block;
  margin-right: 16px;
  font-size: 1.125rem;

  &:last-of-type {
    margin-right: 0;
  }
`

export const ProjectTitle = styled.h3`
  text-align: right;
  padding: 9px 0;
`

export const ProjectTitleCircleBackground = styled.div`
  width: 60px;
  height: 60px;
  background: #d0000d;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: -100;
`

export const ProjectTitleDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const ProjectTitleTextDiv = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`
  
export const SocialLinkImg = styled.img`
  width: 20px;
  height: 20px;
`
  
export const SocialLink = styled.a`
  display: block;
  margin-bottom: 8px;
  color: #FFFFFF;

  &:hover {
    color: ${hoverLinkColor};
  }
`
  
interface SocialLinkDivProps {
  screenWidth: number;
}

export const SocialLinkDiv = styled.div<SocialLinkDivProps>`
  position: fixed;
  bottom: 0;
  left: ${props => props.screenWidth > 1280 ? `${(props.screenWidth - 1280) / 2 + 16}px` : '16px'}
`

export const SocialVerticalLine = styled.div`
  width: 2px;
  height: 20vh;
  margin-left: 14px;
  background-color: #FFFFFF;
`

export const SecondaryTitleSpan = styled.span`
  color: ${secondaryTitleColor}
`

export const Subtitle = styled.p`
  font-size: 1.2rem;
  width: 500px;
  padding-left: 4px;
`

export const Tagline = styled.h4`
  font-weight: 500;
  margin: 0 0 16px;
  padding-left: 4px;
`

export const Title = styled.h1`
  margin: 16px 0;
`

export const TitleSecondary = styled.span`
  color: #FFFFFF;
`