import { css, styled, keyframes} from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Shared from '../shared-style'

const projectScreenShotBackgroundColor = '#508ef1';

interface IFAProps {
  width: number;
  height: number;
}

interface IAboutProps {
  $isvisible: boolean;
}

interface IContactProps {
  $isvisible: boolean;
}

interface IHeaderElementProps {
  $isvisible: boolean;
}

interface IHeaderProps {
  height: number;
  $isvisible: boolean;
}

interface IHeadingVisibleProps {
  $ismobile?: boolean;
  $isvisible: boolean;
}

interface IProjectIconLinkProps {
  $isgithub?: boolean;
}

interface IProjectProps {
  $iseven?: boolean;
  $isvisible?: boolean;
}

interface ISectionHeaderProps {
  alignment: string;
}

interface ISocialElementProps {
  $delay?: number;
  $screenwidth?: number;
}

// Keyframes
const visibleAnimation = keyframes`
  from { opacity: 0; top: 50px; }
  to { opacity: 1; top: 0; }
`

const visibleSocialDiv = keyframes`
  from { visibility: hidden; } 
  to { visibility: visible; } 
`

const visibleSocialLine = keyframes`
  from { height: 0; }
  to {height: 20vh; }
`

// CSS
const animationName = css`
  animation-name: ${visibleAnimation};
`

const animationHeadingDelay = css`
  animation-delay: 2s;
`

// Styled
export const AboutBioContactLink = styled.a`
  color: ${Shared.customRed}
`

export const AboutBioDiv = styled.div`
  width: 100%;
  max-width: 750px;
`

export const AboutContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 80px;

  @media (max-width: 600px) {
    margin-bottom: 64px;
  }
`

export const AboutProfileImage = styled.img`
  width: 100%;
  max-width: 256px;
  height: auto;
  position: relative;
  z-index: 100;
  transition: all 0.7s;
  text-align: center;

  &:hover {
    border-radius: 50%;
  }
`

export const AboutProfileImageBackgroundDiv = styled.div`
  position: absolute;
  width: 100%;
  max-width: 256px;
  height: 100%;
  border: 2px solid ${Shared.customBlue};
  transform: translateX(-50%);
  left: calc(50% + 15px);
  top: 15px;
  transition: all 0.7s;


  @media (max-width: 600px) {
    left: calc(50% + 10px);
    top: 10px;
  }
`

export const AboutProfileImageDiv = styled.div`
  margin-bottom: 32px;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`

export const AboutVisibilityDiv = styled.div<IAboutProps>`
  position: relative;
  top: 50px; 
  opacity: 0;
  ${props => props.$isvisible && animationName}
  animation-duration: 0.7s;
  animation-fill-mode: forwards;
`

export const ContactButton = styled.button`
  padding: 16px 16px;
  background-color: ${Shared.customRed};
  border: none;
  border-radius: 8px;
  margin-top: 16px;
  font-weight: 600;
  font-size: 1.2rem;
  color: #FFFFFF;
  width: 20%;
  min-width: 150px;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    background-color: ${Shared.customBlue};
  }
`

export const ContactButtonDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const ContactButtonLink = styled.a`

`

export const ContactDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

export const ContactText = styled.p`
  margin-top: 0;
  text-align: center;
  width: 100%;
  max-width: 750px;
`

export const ContactVisibleDiv = styled.div<IContactProps>`
  position: relative;
  top: 50px; 
  opacity: 0;
  ${props => props.$isvisible && animationName}
  animation-duration: 0.7s;
  animation-fill-mode: forwards;
`

export const CustomFontAwesomeIcon = styled(FontAwesomeIcon)<IFAProps>`
  width: ${props => props.width}px; 
  height: ${props => props.height}px;
`

export const Header = styled.header<IHeaderProps>`
  margin: 0;
  width: 100%;
  display: flex;
  text-align: left;
  flex-wrap: wrap;
  align-items: center;
  height: ${props => props.height}px;
  visibility: ${props => props.$isvisible ? 'visible' : 'hidden'};

  @media (max-width: 768px) {
    height: auto;
    margin: 80px 0;
    text-align: center;
  }
`

export const HeadingVisibleDiv = styled.div<IHeadingVisibleProps>`
  position: relative;
  top: 50px; 
  opacity: 0;
  ${props => props.$isvisible && animationName}
  ${props => props.$ismobile && animationHeadingDelay}
  $isvisible: boolean;
  animation-duration: 0.7s;
  animation-fill-mode: forwards;
`

export const HeadingUnderline = styled.div`
  width: 35%;
  min-width: 250px;
  height: 0.5px;
  background-color: #FFFFFF;
  margin-bottom: 56px;

  @media (max-width: 600px) {
    margin-bottom: 36px;
  }
`

export const ProjectIconLink = styled.a<IProjectIconLinkProps>`
  color: #FFFFFF;
  margin-right: ${props => props.$isgithub ? '12px' : '0'};

  &:hover {
    color: ${Shared.customBlue};
  }

  @media (max-width: 600px) {
    margin-right: ${props => props.$isgithub ? '18px' : '0'};
  }
`

export const ProjectContainerDiv = styled.div<IProjectProps>`
  position: relative;
  margin-bottom: 96px;
  display: ${props => props.$iseven ? 'flex' : 'block'};
  justify-content: flex-end;

  top: 50px;
  opacity: 0;
  ${props => props.$isvisible && animationName}
  animation-duration: 0.4s;
  animation-fill-mode: forwards;

  &:last-of-type {
    margin-bottom: 80px;
  }

  @media (max-width: 980px) {
    margin-bottom: 144px;
  }
`

export const ProjectContentDiv = styled.div<IProjectProps>`
  position: absolute;
  right: ${props => props.$iseven ? 'auto' : '0'};
  left: ${props => props.$iseven ? '0' : 'auto'};
  top: 50%;
  transform: translateY(-50%);
  width: 50%;

  @media (max-width: 900px) {
    width: 70%;
  }
`

export const ProjectDescription = styled.p`
  margin: 0;
  width: 100%;
`

export const ProjectDescriptionDiv = styled.div`
  background-color: #424952;
  padding: 24px;
  border-radius: 8px;

  @media (max-width: 600px) {
    padding-top: 32px;
    margin-top: -12px;
    z-index: 10;
  }
`

export const ProjectImg = styled.img`
  display: block;
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

export const ProjectLinksList = styled.div<IProjectProps>`
  text-align: ${props => props.$iseven ? 'left' : 'right'};
`

export const ProjectScreenshotDiv = styled.div<IProjectProps>`
  width: 60%;
  height: auto;
  max-height: 400px;
  background-color: ${projectScreenShotBackgroundColor};
  border-radius: 8px;
`

export const ProjectSkillList = styled.ul<IProjectProps>`
  list-style-type: none;
  padding: 0;
  text-align: ${props => props.$iseven ? 'left' : 'right'};

  @media (max-width: 600px) {
   width: 100%;
   text-align: center;
  }
`

export const ProjectSkillListItem = styled.li`
  display: inline-block;
  margin-right: 16px;
  font-size: 1rem;

  &:last-of-type {
    margin-right: 0;
  }

  @media (max-width: 600px) {
    margin-right: 24px;
  }
`

export const ProjectTitle = styled.h3`
  text-align: right;
  padding: 9px 0;
`

export const ProjectTitleCircleBackground = styled.div`
  width: 60px;
  height: 60px;
  background: ${Shared.customRed};
  border-radius: 50%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: -100;
`

export const ProjectTitleDiv = styled.div<IProjectProps>`
  display: flex;
  justify-content: ${props => props.$iseven ? 'flex-start' : 'flex-end'};

  @media (max-width: 600px) {
    justify-content: center;
  }
`

export const ProjectTitleLink = styled.a`
  text-decoration: none;
  color: inherit;
`

export const ProjectTitleTextDiv = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  @media (max-width: 600px) {
    z-index: 100;
  }
`

export const ProjectMobileContainerDiv = styled.div<IProjectProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 52px;
  padding: 24px;
  border-radius: 8px;
  border: solid 2px ${Shared.customBlue};

  position: relative;
  top: 50px;
  opacity: 0;
  ${props => props.$isvisible && animationName}
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
`

export const ProjectMobileScreenshotDiv = styled.div`
  width: 90%;
  margin-top: 16px;

  @media (max-width: 600px) {
    z-index: 20;
  }
`

export const ProjectMobileImg = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 8px; 
`

export const ProjectsHeadingVisibilityDiv = styled.div<IHeadingVisibleProps>`
  position: relative;
  top: 50px; 
  opacity: 0;
  ${props => props.$isvisible && animationName}
  animation-duration: 0.7s;
  animation-fill-mode: forwards;
`

export const SecondaryTitleSpan = styled.span`
  color: ${Shared.customBlue}
`

export const SectionHeaderDiv = styled.div<ISectionHeaderProps>`
  display: flex;
  justify-content: ${props => props.alignment};
  flex-wrap: wrap;
`

export const SectionHeaderTitle = styled.h2<ISectionHeaderProps>`
  width: 100%;
  text-align: ${props => props.alignment};
`
  
export const SocialLinkImg = styled.img`
  width: 20px;
  height: 20px;
`
  
export const SocialLink = styled.a<ISocialElementProps>`
  display: block;
  margin-bottom: 8px;
  color: #FFFFFF;

  position: relative;
  top: 50px;  
  opacity: 0;
  animation-name: ${visibleAnimation};
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
  animation-delay: ${props => props.$delay ? `${props.$delay + 2.3}s` : '2.3s' };

  &:hover {
    color: ${Shared.customBlue};
  }
`

export const SocialLinkDiv = styled.div<ISocialElementProps>`
  position: fixed;
  bottom: 0;
  animation-name: ${visibleSocialDiv};
  animation-duration: 1s;
  left: ${props => props.$screenwidth && props.$screenwidth > 1280 ? `${(props.$screenwidth - 1280) / 2 + 32}px` : '32px'};

  @media (max-width: 768px) {
    display: none;
  }
`

export const SocialVerticalLine = styled.div`
  width: 2px;
  margin-left: 14px;
  background-color: #FFFFFF;
  animation-name: ${visibleSocialLine};
  animation-duration: 0.5s;
  animation-delay: 2.4s;
  animation-fill-mode: forwards;
`

export const Subtitle = styled.p<IHeaderElementProps>`
  font-size: 1.2rem;
  width: 100%;
  max-width: 500px;
  padding-left: 4px;

  position: relative;
  top: 50px; 
  opacity: 0;
  ${props => props.$isvisible && animationName}
  animation-duration: 0.7s;
  animation-delay: 1.4s;
  animation-fill-mode: forwards;

  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
`

export const Tagline = styled.h4<IHeaderElementProps>`
  font-weight: 500;
  margin: 0 0 16px;
  padding-left: 4px;


  position: relative;
  top: 50px;  
  opacity: 0;
  ${props => props.$isvisible && animationName}
  animation-duration: 0.7s;
  animation-fill-mode: forwards;
  animation-delay: 1s;

  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
`

export const Title = styled.h1<IHeaderElementProps>`
  margin: 16px 0;

  
  position: relative;
  top: 50px; 
  opacity: 0;
  ${props => props.$isvisible && animationName}
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

export const TitleSecondary = styled.span`
  color: #FFFFFF;
`