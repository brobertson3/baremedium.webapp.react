import React, { useEffect, useRef, useState } from 'react'
import * as Styled from './home-style'
import * as Shared from '../shared-style'
import useScreenSize from '../../hooks/useScreenSize'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin, faTwitter, faInstagram, faCodepen } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import HealthScannerScreenshot from '../../assets/health-scanner-screenshot.png'
import SmartDecisionScreenshot from '../../assets/smart-decision-screenshot.png'
import BlackHistoryOTMScreenshot from '../../assets/black-history-otm-screenshot.png'
import ProfileImage from '../../assets/baremedium-headshot.jpg'

interface IHomeProps {
  aboutMeSectionRef: React.RefObject<HTMLDivElement> | null;
  contactSectionRef: React.RefObject<HTMLDivElement> | null;
  navHeight: number;
  projectsSectionRef: React.RefObject<HTMLDivElement> | null;
  handleCheckHomeLoaded: (isLoaded: boolean) => void;
}

function Home({ aboutMeSectionRef, contactSectionRef, navHeight, projectsSectionRef, handleCheckHomeLoaded }: IHomeProps) {
  const profileImageBackgroundRef = useRef<HTMLDivElement | null>(null);
  const intersectionHeaderRef = useRef<HTMLElement | null>(null);
  const intersectionAboutRef = useRef<HTMLDivElement | null>(null);
  const intersectionContactRef = useRef<HTMLDivElement | null>(null);
  const intersectionAboutHeadingRef = useRef<HTMLDivElement | null>(null);
  const intersectionContactHeadingRef = useRef<HTMLDivElement | null>(null);
  const intersectionProjectsHeadingRef = useRef<HTMLDivElement | null>(null);
  const intersectionProjectRefs = useRef<HTMLDivElement[] | null[]>([]);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isAboutHeadingVisible, setIsAboutHeadingVisible] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);
  const [isContactHeadingVisible, setIsContactHeadingVisible] = useState(false);
  const [isProjectsHeadingVisible, setIsProjectsHeadingVisible] = useState(false);
  const [isProjectVisible, setIsProjectVisible] = useState<number[]>([]);
  const isProjectVisibleRef = useRef<number[]>([]);
  const screenSize = useScreenSize();
  const intersectionOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.45,
  };

  useEffect(() => {
    handleCheckHomeLoaded(true)

    return () => {
      handleCheckHomeLoaded(false)
    }
  }, [])

  useEffect(() => {
    isProjectVisibleRef.current = isProjectVisible;
  }, [isProjectVisible])
  
  const intersectionCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target === intersectionHeaderRef.current) {
          setIsHeaderVisible(true);
        } else if (entry.target === intersectionAboutRef.current) {
          setIsAboutVisible(true);
        } else if (entry.target === intersectionAboutHeadingRef.current) {
          setIsAboutHeadingVisible(true);
        } else if (entry.target === intersectionProjectsHeadingRef.current) {
          setIsProjectsHeadingVisible(true);
        } else if (entry.target === intersectionContactRef.current) {
          setIsContactVisible(true);
        } else if (entry.target === intersectionContactHeadingRef.current) {
          setIsContactHeadingVisible(true);
        } else {
          const visibleArray: number[] = [...isProjectVisibleRef.current];
          intersectionProjectRefs.current.forEach((ref, index) => {
            if (entry.target === ref && !visibleArray.includes(index)) {
              visibleArray.push(index);
            }
          })
          setIsProjectVisible(visibleArray);
        }
      }
    })
    // if (entries[0].isIntersecting) {
      
    //   // Not possible to set it back to false like this:
    //   setIsHeaderVisible(true);
      
    //   // No need to keep observing:
    //   // observer.unobserve(intersectionHeaderRef.current);
    // }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(intersectionCallback, intersectionOptions);
    if (intersectionHeaderRef.current) {
      observer.observe(intersectionHeaderRef.current);
    }

    if (intersectionAboutHeadingRef.current) {
      observer.observe(intersectionAboutHeadingRef.current);
    }

    if (intersectionAboutRef.current) {
      observer.observe(intersectionAboutRef.current);
    }

    if (intersectionContactHeadingRef.current) {
      observer.observe(intersectionContactHeadingRef.current);
    }

    if (intersectionContactRef.current) {
      observer.observe(intersectionContactRef.current);
    }

    if (intersectionProjectsHeadingRef.current) {
      observer.observe(intersectionProjectsHeadingRef.current);
    }

    if (intersectionProjectRefs.current) {
      intersectionProjectRefs.current.forEach((ref) => {
        if (ref) {
          observer.observe(ref);
        }
      })
    }
    
    return () => {
      observer.disconnect()
    }
  }, [])

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
      screenshot: BlackHistoryOTMScreenshot,
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
    <Shared.Main>
      <Styled.SocialLinkDiv $screenwidth={screenSize.width}>
        {
          socialLinks.map((socialLink, index) => (
            <Styled.SocialLink
              key={`socialLink${index}`}
              href={socialLink.link}
              target='_blank'
              rel='noopener'
              $delay={0.8 - (0.2 * index)}
            >
              <Styled.CustomFontAwesomeIcon width={30} height={30} icon={socialLink.icon as IconProp} />
            </Styled.SocialLink>
          ))
        }
        <Styled.SocialVerticalLine />
      </Styled.SocialLinkDiv>

      <Styled.Header ref={intersectionHeaderRef} height={window.innerHeight - navHeight - 16} $isvisible={isHeaderVisible}>
        <div>
          <Styled.Tagline $isvisible={isHeaderVisible}>Hey there. My name is</Styled.Tagline>
          <Styled.Title $isvisible={isHeaderVisible}>
            Brent Robertson.<br />
            <Styled.TitleSecondary>I'm a </Styled.TitleSecondary>
            <Styled.SecondaryTitleSpan>Front End Engineer</Styled.SecondaryTitleSpan>
            <Styled.TitleSecondary> based in Southern California.</Styled.TitleSecondary>
          </Styled.Title>
          <Styled.Subtitle $isvisible={isHeaderVisible}>I create digital experiences for the web. I specialize in web development with React, TypeScript, JavaScript, Node.js, Express, and Firebase.</Styled.Subtitle>
        </div>
      </Styled.Header>

      <Styled.HeadingVisibleDiv ref={intersectionAboutHeadingRef} $isvisible={isAboutHeadingVisible} $ismobile={isMobile}>
        <Styled.SectionHeaderDiv alignment='center' ref={aboutMeSectionRef}>
          <Styled.SectionHeaderTitle alignment='center'>About Me</Styled.SectionHeaderTitle>
          <Styled.HeadingUnderline />
        </Styled.SectionHeaderDiv>
      </Styled.HeadingVisibleDiv>
      <Styled.AboutVisibilityDiv id={'#about'} ref={intersectionAboutRef} $isvisible={isAboutVisible}>
        <Styled.AboutContainerDiv>
          <Styled.AboutProfileImageDiv>
            <Styled.AboutProfileImage src={ProfileImage} alt='Profile image of Brent Robertson (Solo Developer at Bare Medium)' onMouseEnter={handleMouseEnterProfileImage} onMouseLeave={handleMouseLeaveProfileImage} />
            <Styled.AboutProfileImageBackgroundDiv ref={profileImageBackgroundRef} />
          </Styled.AboutProfileImageDiv>
          <Styled.AboutBioDiv>
            <p>
              Hi there! My name is Brent and I'm a Software Engineer specializing in Front End Development. I've been exclusively creating things for the web for the past 6 years, but I've been coding in general since 2012.
              I've worked with a variety of companies and clients, including: startups, small businesses, and government agencies. My motivation for beginning my coding career is the same thing that keeps me going to this day -
              I just want to create beautiful experiences that make a difference.
            </p>
            <p>
              These days I specialize in: React, JavaScript, TypeScript, HTML5, CSS3, Firebase, Node.js, Express, and Wordpress. Feel free to reach out if you have a project or full-time opportunity.
            </p>
            <Styled.ContactButtonDiv>
              <Styled.ContactButton>
                <Styled.ContactButtonLink href='mailto: baremedium@gmail.com'>
                  Contact Me
                </Styled.ContactButtonLink>
              </Styled.ContactButton>
            </Styled.ContactButtonDiv>
          </Styled.AboutBioDiv>
        </Styled.AboutContainerDiv>
      </Styled.AboutVisibilityDiv>

      <Styled.ProjectsHeadingVisibilityDiv id={'#projects'} ref={intersectionProjectsHeadingRef} $isvisible={isProjectsHeadingVisible}>
        <Styled.SectionHeaderDiv alignment={isMobile ? 'center' : 'left'} ref={projectsSectionRef}>
          <Styled.SectionHeaderTitle alignment={isMobile ? 'center' : 'left'}>Projects</Styled.SectionHeaderTitle>
          <Styled.HeadingUnderline />
        </Styled.SectionHeaderDiv>
      </Styled.ProjectsHeadingVisibilityDiv>
      <>
        {
          projects.map((project, index) => (
            <div key={`ProjectDiv${index}`}>
              {
                !isMobile && (
                  <Styled.ProjectContainerDiv
                    ref={(el) => (intersectionProjectRefs.current[index] = el)}
                    $iseven={(index + 1) % 2 === 0}
                    $isvisible={isProjectVisible.includes(index)}
                  >
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
                <Styled.ProjectMobileContainerDiv
                  ref={(el) => (intersectionProjectRefs.current[index] = el)}
                  $isvisible={isProjectVisible.includes(index)}
                >
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
            </div>
          ))
        }
      </>
      <Styled.HeadingVisibleDiv id={'#contact'} ref={intersectionContactHeadingRef} $isvisible={isContactHeadingVisible}>
        <Styled.SectionHeaderDiv alignment='center' ref={contactSectionRef}>
          <Styled.SectionHeaderTitle alignment='center'>Get In Touch</Styled.SectionHeaderTitle>
          <Styled.HeadingUnderline />
        </Styled.SectionHeaderDiv>
      </Styled.HeadingVisibleDiv>
      <Styled.ContactVisibleDiv ref={intersectionContactRef} $isvisible={isContactVisible}>
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
      </Styled.ContactVisibleDiv>
    </Shared.Main>
  )
}

export default Home;