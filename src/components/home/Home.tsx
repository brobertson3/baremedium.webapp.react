import React, { useEffect, useRef, useState } from 'react'
import * as Styled from './home-style'
import useScreenSize from '../../hooks/useScreenSize'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin, faTwitter, faInstagram, faCodepen } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import HealthScannerScreenshot from '../../assets/health-scanner-screenshot.png'
import SmartDecisionScreenshot from '../../assets/smart-decision-screenshot.png'
import BlackHistotyOTMScreenshot from '../../assets/black-history-otm-screenshot.png'
import ProfileImage from '../../assets/baremedium-headshot.jpg'

interface IHomeProps {
  aboutMeSectionRef: React.RefObject<HTMLDivElement> | null;
  contactSectionRef: React.RefObject<HTMLDivElement> | null;
  projectsSectionRef: React.RefObject<HTMLDivElement> | null;
  navHeight: number;
}

function Home({ aboutMeSectionRef, contactSectionRef, projectsSectionRef, navHeight }: IHomeProps) {
  const profileImageBackgroundRef = useRef<HTMLDivElement | null>(null);
  const screenSize = useScreenSize();

  const checkIsMobile = () => screenSize.width <= 600

  const [isMobile, setIsMobile] = useState(checkIsMobile())

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

  const projects = [
    {
      link: 'https://smart-decision-1308d.web.app',
      screenshot: SmartDecisionScreenshot,
      altText: 'Screenshot of the Smart Decision Web App created by Bare Medium',
      title: 'Smart Decision',
      description: 'A web app to help you choose the best option based on your priorities. Make an account, create a new decision, and view your results. Your decisions are saved to view or edit later.',
      skills: ['React', 'JavaScript', 'Firebase', 'Material UI'],
      githubLink: '',
    },
    {
      link: 'https://healthscanner.herokuapp.com',
      screenshot: HealthScannerScreenshot,
      altText: 'Screenshot of the Health Scanner Web App created by Bare Medium',
      title: 'Health Scanner',
      description: 'A tool to help identify potentially harmful ingredients for pregnant women. Just take a picture of the ingredient list and the web app will scan and identify harmful ingredients.',
      skills: ['React', 'Node.js', 'Express', 'Google Vision API'],
      githubLink: 'https://github.com/brobertson3/pregnancy.scanner.node',
    },
    {
      link: 'https://blackhistoryotm.com/',
      screenshot: BlackHistotyOTMScreenshot,
      altText: 'Screenshot of the Black History On The Move website',
      title: 'Black History OTM',
      description: 'A website to promote a very special small business that provides African American mobile display services and education to schools and other businesses.',
      skills: ['JavaScript', 'HTML5', 'CSS3', 'Wordpress'],
      githubLink: '',
    },
  ]

  const handleMouseEnterProfileImage = () => {
    if (profileImageBackgroundRef.current) {
      profileImageBackgroundRef.current.style.borderRadius = '50%'
      profileImageBackgroundRef.current.style.borderColor = '#D0000D'
    }

  }

  const handleMouseLeaveProfileImage = () => {
    if (profileImageBackgroundRef.current) {
      profileImageBackgroundRef.current.style.borderRadius = '0'
      profileImageBackgroundRef.current.style.borderColor = '#3967B1'
    }
  }

  useEffect(() => {
    setIsMobile(checkIsMobile())
  }, [screenSize.width])

  return (
    <Styled.Main>
      <Styled.SocialLinkDiv screenwidth={screenSize.width}>
        {
          socialLinks.map((socialLink, index) => (
            <Styled.SocialLink key={`socialLink${index}`} href={socialLink.link} target='_blank' rel='noopener'>
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

      <Styled.SectionHeaderDiv alignment='center' ref={aboutMeSectionRef}>
        <Styled.SectionHeaderTitle alignment='center'>About Me</Styled.SectionHeaderTitle>
        <Styled.HeadingUnderline />
      </Styled.SectionHeaderDiv>
      <Styled.AboutContainerDiv>
        <Styled.AboutProfileImageDiv>
          <Styled.AboutProfileImage src={ProfileImage} alt='Profile image of Brent Robertson (Solo Developer at Bare Medium)' onMouseEnter={handleMouseEnterProfileImage} onMouseLeave={handleMouseLeaveProfileImage} />
          <Styled.AboutProfileImageBackgroundDiv ref={profileImageBackgroundRef} />
        </Styled.AboutProfileImageDiv>
        <Styled.AboutBioDiv>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas pretium aenean pharetra magna ac.
            Elementum pulvinar etiam non quam lacus suspendisse. Dictum fusce ut placerat orci nulla pellentesque. Sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus.
            Turpis massa sed elementum tempus egestas sed. Porttitor massa id neque aliquam vestibulum morbi blandit cursus risus. Vitae suscipit tellus mauris a.
            Nulla malesuada pellentesque elit eget gravida cum sociis natoque.
          </p>
          <p>
            At in tellus integer feugiat scelerisque varius. Tincidunt dui ut ornare lectus sit amet est. Velit ut tortor pretium viverra. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse.
            Pharetra et ultrices neque ornare aenean euismod elementum nisi quis.
          </p>
        </Styled.AboutBioDiv>
      </Styled.AboutContainerDiv>

      <Styled.SectionHeaderDiv alignment={isMobile ? 'center' : 'left'} ref={projectsSectionRef}>
        <Styled.SectionHeaderTitle alignment={isMobile ? 'center' : 'left'}>Projects</Styled.SectionHeaderTitle>
        <Styled.HeadingUnderline />
      </Styled.SectionHeaderDiv>
      <>
        {
          projects.map((project, index) => (
            <>
              {
                !isMobile && (
                  <Styled.ProjectContainerDiv key={`projectContainer${index}`} $iseven={(index + 1) % 2 === 0}>
                    <Styled.ProjectScreenshotDiv $iseven={(index + 1) % 2 === 0}>
                      <a href={project.link} target='_blank' rel='noopener noreferrer'>
                        <Styled.ProjectImg src={project.screenshot} alt={project.altText} />
                      </a>
                    </Styled.ProjectScreenshotDiv>
                    <Styled.ProjectContentDiv $iseven={(index + 1) % 2 === 0}>
                      <Styled.ProjectTitleDiv $iseven={(index + 1) % 2 === 0}>
                        <Styled.ProjectTitleTextDiv>
                          <Styled.ProjectTitleLink href={project.link}>
                            <Styled.ProjectTitle>{project.title}</Styled.ProjectTitle>
                          </Styled.ProjectTitleLink>
                          <Styled.ProjectTitleCircleBackground />
                        </Styled.ProjectTitleTextDiv>
                      </Styled.ProjectTitleDiv>
                      <Styled.ProjectDescriptionDiv>
                        <Styled.ProjectDescription>
                          {project.description}
                        </Styled.ProjectDescription>
                      </Styled.ProjectDescriptionDiv>
                      <Styled.ProjectSkillList $iseven={(index + 1) % 2 === 0}>
                        {
                          project.skills.map((skill, index) => (
                            <Styled.ProjectSkillListItem key={`projectSkill${index}`}>{skill}</Styled.ProjectSkillListItem>
                          ))
                        }
                      </Styled.ProjectSkillList>
                      <Styled.ProjectLinksList $iseven={(index + 1) % 2 === 0}>
                        {
                          project.githubLink && (
                            <Styled.ProjectIconLink $isgithub={!!project.githubLink} href={project.githubLink} target='_blank' rel='noopener noreferrer'>
                              <Styled.CustomFontAwesomeIcon width={22} height={22} icon={faGithub} />
                            </Styled.ProjectIconLink>
                          )
                        }
                        <Styled.ProjectIconLink href={project.link} target='_blank' rel='noopener noreferrer'>
                          <Styled.CustomFontAwesomeIcon width={20} height={20} icon={faArrowUpRightFromSquare} />
                        </Styled.ProjectIconLink>
                      </Styled.ProjectLinksList>
                    </Styled.ProjectContentDiv>
                  </Styled.ProjectContainerDiv>
                )
              }
              {
                isMobile && (
                 <Styled.ProjectMobileContainerDiv>
                   <Styled.ProjectTitleDiv>
                      <Styled.ProjectTitleTextDiv>
                        <Styled.ProjectTitleLink href={project.link}>
                          <Styled.ProjectTitle>{project.title}</Styled.ProjectTitle>
                        </Styled.ProjectTitleLink>
                        <Styled.ProjectTitleCircleBackground />
                      </Styled.ProjectTitleTextDiv>
                    </Styled.ProjectTitleDiv>
                   <Styled.ProjectMobileScreenshotDiv>
                    <a href={project.link} target='_blank' rel='noopener noreferrer'>
                      <Styled.ProjectMobileImg src={project.screenshot} alt={project.altText} />
                    </a>
                   </Styled.ProjectMobileScreenshotDiv>
                   <Styled.ProjectDescriptionDiv>
                      <Styled.ProjectDescription>
                        {project.description}
                      </Styled.ProjectDescription>
                    </Styled.ProjectDescriptionDiv>
                    <Styled.ProjectSkillList $iseven={(index + 1) % 2 === 0}>
                      {
                        project.skills.map((skill, index) => (
                          <Styled.ProjectSkillListItem key={`projectSkill${index}`}>{skill}</Styled.ProjectSkillListItem>
                        ))
                      }
                    </Styled.ProjectSkillList>
                    <Styled.ProjectLinksList $iseven={(index + 1) % 2 === 0}>
                      {
                        project.githubLink && (
                          <Styled.ProjectIconLink $isgithub={!!project.githubLink} href={project.githubLink} target='_blank' rel='noopener noreferrer'>
                            <Styled.CustomFontAwesomeIcon width={22} height={22} icon={faGithub} />
                          </Styled.ProjectIconLink>
                        )
                      }
                      <Styled.ProjectIconLink href={project.link} target='_blank' rel='noopener noreferrer'>
                        <Styled.CustomFontAwesomeIcon width={20} height={20} icon={faArrowUpRightFromSquare} />
                      </Styled.ProjectIconLink>
                    </Styled.ProjectLinksList>
                 </Styled.ProjectMobileContainerDiv>
                )
              }
            </>
          ))
        }
      </>
      
      <Styled.SectionHeaderDiv alignment='center' ref={contactSectionRef}>
        <Styled.SectionHeaderTitle alignment='center'>Get In Touch</Styled.SectionHeaderTitle>
        <Styled.HeadingUnderline />
      </Styled.SectionHeaderDiv>
      <Styled.ContactDiv>
        <Styled.ContactText>I'm currently open to discussing full-time, contract, or freelance opportunities. You can reach me at baremedium@gmail.com.</Styled.ContactText>
        <Styled.ContactButtonDiv>
          <Styled.ContactButton>
            <Styled.ContactButtonLink href='mailto: baremedium@gmail.com'>
              Contact Me
            </Styled.ContactButtonLink>
          </Styled.ContactButton>
        </Styled.ContactButtonDiv>
      </Styled.ContactDiv>
    </Styled.Main>
  )
}

export default Home
