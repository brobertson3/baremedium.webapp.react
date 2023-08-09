import React from 'react'
import * as Styled from './home-style'
import useScreenSize from '../../hooks/useScreenSize'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin, faTwitter, faInstagram, faCodepen } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import SmartDecisionScreenshot from '../../assets/smart-decision-screenshot.png'

interface IHomeProps {
  navHeight: number;
}

function Home({navHeight}: IHomeProps) {
  const screenSize = useScreenSize();
  const socialLinks = [
    {
      link: 'https://github.com/brobertson3',
      icon: faGithub,
    },
    {
      link: 'https://www.linkedin.com/in/brentrobertson3',
      icon: faLinkedin,
    },
    {
      link: 'https://twitter.com/TechMeOut21',
      icon: faTwitter,
    },
    {
      link: 'https://www.instagram.com/baremedium',
      icon: faInstagram,
    },
    {
      link: 'https://codepen.io/brobertson3',
      icon: faCodepen,
    }
  ]

  const smartDecisionSkills = ['React', 'JavaScript', 'Firebase', 'Material UI']

  return (
    <Styled.Main>
      <Styled.SocialLinkDiv screenWidth={screenSize.width}>
        {
          socialLinks.map((socialLink) => (
            <Styled.SocialLink href={socialLink.link} target='_blank' rel='noopener'>
              <Styled.CustomFontAwesomeIcon width={30} height={30} icon={socialLink.icon as IconProp} />
            </Styled.SocialLink>
          ))
        }
        <Styled.SocialVerticalLine />
      </Styled.SocialLinkDiv>

      <Styled.Header height={window.innerHeight - navHeight - 16}>
        <div>
          <Styled.Tagline>Hey there. My name is</Styled.Tagline>
          <Styled.Title>
            Brent Robertson.<br />
            <Styled.TitleSecondary>I'm a </Styled.TitleSecondary>
            <Styled.SecondaryTitleSpan>Front End Engineer</Styled.SecondaryTitleSpan>
            <Styled.TitleSecondary> based in Southern California.</Styled.TitleSecondary>
          </Styled.Title>
          <Styled.Subtitle>I create digital experiences for the web. I specialize in web development with React, TypeScript, JavaScript, Node.js, Express, and Firebase.</Styled.Subtitle>
        </div>
      </Styled.Header>
      <h2>Projects</h2>
      <Styled.HeadingUnderline />
      <Styled.ProjectContainerDiv>
        <Styled.ProjectScreenshotDiv>
          <a href='https://smart-decision-1308d.web.app' target='_blank' rel='noopener noreferrer'>
            <Styled.ProjectImg src={SmartDecisionScreenshot} />
          </a>
        </Styled.ProjectScreenshotDiv>
        <Styled.ProjectContentDiv>
          <Styled.ProjectTitleDiv>
            <Styled.ProjectTitleTextDiv>
              <Styled.ProjectTitle>Smart Decision</Styled.ProjectTitle>
              <Styled.ProjectTitleCircleBackground />
            </Styled.ProjectTitleTextDiv>
          </Styled.ProjectTitleDiv>
          <Styled.ProjectDescriptionDiv>
            <Styled.ProjectDescription>
              A web app to help you choose the best option based on your priorities. Make an account, create a new decision, and view your results.
              Your decisions are saved to view or edit later.
            </Styled.ProjectDescription>
          </Styled.ProjectDescriptionDiv>
          <Styled.ProjectSkillList>
            {
              smartDecisionSkills.map((skill) => (
                <Styled.ProjectSkillListItem>{skill}</Styled.ProjectSkillListItem>
              ))
            }
          </Styled.ProjectSkillList>
          <Styled.ProjectLinksList>
            <Styled.IconLink href='https://github.com/brobertson3' target='_blank' rel='noopener noreferrer' style={{ marginRight: '12px' }}>
              <Styled.CustomFontAwesomeIcon width={26} height={26} icon={faGithub} />
            </Styled.IconLink>
            <Styled.IconLink href='https://smart-decision-1308d.web.app' target='_blank' rel='noopener noreferrer'>
              <Styled.CustomFontAwesomeIcon width={24} height={24} icon={faArrowUpRightFromSquare} />
            </Styled.IconLink>
          </Styled.ProjectLinksList>
        </Styled.ProjectContentDiv>
      </Styled.ProjectContainerDiv>
    </Styled.Main>
  )
}

export default Home
