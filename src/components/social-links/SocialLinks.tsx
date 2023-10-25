import * as Styled from '../home/home-style'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin, faTwitter, faInstagram, faCodepen } from '@fortawesome/free-brands-svg-icons'
import useScreenSize from '../../hooks/useScreenSize'


function SocialLinks () {

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
  )
}

export default SocialLinks