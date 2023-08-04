import React from 'react'
import * as Styled from './home-style'
import useScreenSize from '../../hooks/useScreenSize'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin, faTwitter, faInstagram, faCodepen } from '@fortawesome/free-brands-svg-icons'

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

  return (
    <main style={{ display: 'flex', alignItems: 'center', height: window.innerHeight - navHeight - 16, marginLeft: '96px', marginRight: '96px' }}>
      <Styled.SocialLinkDiv style={{ left: screenSize.width > 1280 ? `${(screenSize.width - 1280) / 2 + 16}px` : '16px' }}>
        {
          socialLinks.map((socialLink) => (
            <Styled.SocialLink href={socialLink.link} target='_blank' rel='noopener'>
              <FontAwesomeIcon icon={socialLink.icon as IconProp} style={{width: '30px', height: '30px', color: '#FFFFFF' }} />
            </Styled.SocialLink>
          ))
        }
        <div style={{ width: '2px', height: '20vh', marginLeft: '14px', backgroundColor: '#FFFFFF' }}>

        </div>
      </Styled.SocialLinkDiv>

      <Styled.Header>
        <Styled.Tagline>Hey there. My name is</Styled.Tagline>
          <Styled.Title>
            Brent Robertson.<br /><Styled.TitleSecondary>I'm a </Styled.TitleSecondary><span style={{color: '#3967B1'}}>Front End Engineer</span><Styled.TitleSecondary> based in California.</Styled.TitleSecondary>
          </Styled.Title>
          <Styled.Subtitle>I create digital experiences for the web. I specialize in web development with React, TypeScript, JavaScript, Node.js, Express, and Firebase.</Styled.Subtitle>
      </Styled.Header>
    </main>
  )
}

export default Home
