import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Shared from '../shared-style'

const projectScreenShotBackgroundColor = '#508ef1';

interface IFAProps{
  width: number;
  height: number;
}

interface ISectionHeaderProps {
  alignment: string;
}

interface IHeaderProps {
  height: number;
}

interface IProjectIconLinkProps {
  $isgithub?: boolean;
}

interface IProjectProps {
  $iseven?: boolean;
}

interface ISocialLinkDivProps {
  screenwidth: number;
}

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

  @media (max-width: 601px) {
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


  @media (max-width: 601px) {
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

export const CustomFontAwesomeIcon = styled(FontAwesomeIcon)<IFAProps>`
  width: ${props => props.width}px; 
  height: ${props => props.height}px;
`

export const Header = styled.header<IHeaderProps>`
  margin: 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: ${props => props.height}px;
`

export const HeadingUnderline = styled.div`
  width: 35%;
  min-width: 250px;
  height: 0.5px;
  background-color: #FFFFFF;
  margin-bottom: 56px;

  @media (max-width: 601px) {
    margin-bottom: 36px;
  }
`

export const ProjectIconLink = styled.a<IProjectIconLinkProps>`
  color: #FFFFFF;
  margin-right: ${props => props.$isgithub ? '12px' : '0'};

  &:hover {
    color: ${Shared.customBlue};
  }

  @media (max-width: 601px) {
    margin-right: ${props => props.$isgithub ? '18px' : '0'};
  }
`

export const Main = styled.main`
  margin: 0 96px 80px;

  @media (max-width: 769px) {
    margin: 0 0 80px;
  }
`

export const ProjectContainerDiv = styled.div<IProjectProps>`
  position: relative;
  margin-bottom: 96px;
  display: ${props => props.$iseven ? 'flex' : 'block'};
  justify-content: flex-end;

  &:last-of-type {
    margin-bottom: 80px;
  }

  @media (max-width: 981px) {
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

  @media (max-width: 601px) {
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

  @media (max-width: 601px) {
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

  @media (max-width: 601px) {
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

  @media (max-width: 601px) {
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

  @media (max-width: 601px) {
    z-index: 100;
  }
`

export const ProjectMobileContainerDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 52px;
  padding: 24px;
  border-radius: 8px;
  border: solid 2px ${Shared.customBlue};
`

export const ProjectMobileScreenshotDiv = styled.div`
  width: 90%;
  margin-top: 16px;

  @media (max-width: 601px) {
    z-index: 20;
  }
`

export const ProjectMobileImg = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 8px; 
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
  
export const SocialLink = styled.a`
  display: block;
  margin-bottom: 8px;
  color: #FFFFFF;

  &:hover {
    color: ${Shared.customBlue};
  }
`

export const SocialLinkDiv = styled.div<ISocialLinkDivProps>`
  position: fixed;
  bottom: 0;
  left: ${props => props.screenwidth > 1280 ? `${(props.screenwidth - 1280) / 2 + 16}px` : '16px'};

  @media (max-width: 769px) {
    display: none;
  }
`

export const SocialVerticalLine = styled.div`
  width: 2px;
  height: 20vh;
  margin-left: 14px;
  background-color: #FFFFFF;
`

export const Subtitle = styled.p`
  font-size: 1.2rem;
  width: 100%;
  max-width: 500px;
  padding-left: 4px;

  @media (max-width: 601px) {
    font-size: 1.1rem;
  }
`

export const Tagline = styled.h4`
  font-weight: 500;
  margin: 0 0 16px;
  padding-left: 4px;

  @media (max-width: 601px) {
    font-size: 1.1rem;
  }
`

export const Title = styled.h1`
  margin: 16px 0;

  @media (max-width: 1068px) {
    font-size: 3rem;
  }

  @media (max-width: 601px) {
    font-size: 2.2rem;
  }
`

export const TitleSecondary = styled.span`
  color: #FFFFFF;
`