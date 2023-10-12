import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import './App.css'
import Home from '../home/Home'
import Blog from '../blog/Blog'
import MainNavigation from '../navigation/MainNavigation'
import Footer from '../footer/Footer'
import * as Styled from './app-style'
import useScreenSize from '../../hooks/useScreenSize'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  // useLocation,
  // useNavigate
} from "react-router-dom";

import Query from '../blog/Query'
import BLOG_QUERY from '../../queries/blogSummary'
// import ApolloClient from 'apollo-boost'

function App() {
  const [navHeight, setNavHeight] = useState(0);
  const [mobileMenuShow, setMobileMenuShow] = useState(false)
  const [isHomeLoaded, setIsHomeLoaded] = useState(false)
  const aboutMeSectionRef = useRef<HTMLDivElement | null>(null);
  const contactSectionRef = useRef<HTMLDivElement | null>(null);
  const mainDivRef = useRef<HTMLDivElement | null>(null);
  const projectsSectionRef = useRef<HTMLDivElement | null>(null);

  const screenSize = useScreenSize();
  // const location = useLocation();
  // const navigate = useNavigate();

  // const [error, setError] = useState(null);

  // const client = new ApolloClient({
  //   uri: 'http://localhost:1337/graphql',
  // })

  // // Parses the JSON returned by a network request
  // const parseJSON = (resp: any) => (resp.json ? resp.json() : resp);

  // // Checks if a network request came back fine, and throws an error if not
  // const checkStatus = (resp: any) => {
  //   if (resp.status >= 200 && resp.status < 300) {
  //     return resp;
  //   }

  //   return parseJSON(resp).then((resp) => {
  //     throw resp;
  //   });
  // };

  // const headers = { "Content-Type": "application/json" };
  
  // useEffect(() => {
  //   fetch("http://localhost:1337/api/posts?populate=writer", { headers, method: "GET" })
  //     .then(checkStatus)
  //     .then(parseJSON)
  //     .then(({ data }) => console.log('data: ', data))
  //     .catch((error) => setError(error));
  // }, []);

  useEffect(() => {
    let currentRef = null

    if (location.pathname === '/' && isHomeLoaded) {
      switch (location.hash.slice(1)) {
        case 'about':
          currentRef = aboutMeSectionRef
          break;
        case 'projects':
          currentRef = projectsSectionRef
          break;
        case 'contact':
          currentRef = contactSectionRef
          break;
        default:
          break;
      }

      if (currentRef?.current) {
        currentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }


  }, [location, isHomeLoaded]);

  useEffect(() => {
    if (screenSize.width > 600) {
      setMobileMenuShow(false)
    }
  }, [screenSize]);

  useEffect(() => {
    if (mainDivRef?.current) {
      mainDivRef.current.style.position = mobileMenuShow ? 'fixed' : 'relative'
    }
  }, [mobileMenuShow])

  const handleCheckHomeLoaded = (isLoaded: boolean) => {
    setIsHomeLoaded(isLoaded);
  }

  const handleLinkClick = (text: string, isMobileNavItem: boolean) => {
    let currentRef = null;

    switch (text) {
      case 'About':
        currentRef = aboutMeSectionRef
        break;
      case 'Projects':
        currentRef = projectsSectionRef
        break;
      default:
        currentRef = contactSectionRef
    }
    
    if (mainDivRef?.current) {
      if (isMobileNavItem) {
        mainDivRef.current.style.position = !mobileMenuShow ? 'fixed' : 'relative'
        setMobileMenuShow(!mobileMenuShow)
      } else {
        mainDivRef.current.style.position = 'relative'
      }
    }

    if (location && location.pathname === '/') {
      if (currentRef?.current) {
        currentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } else {
      window.location.href = `/#${text.toLowerCase()}`
    }
    
  }

  const AppLayout = () => {
    return (
      <Outlet />
    )
  }

  const generalRoutes = [
    {
      path: '/',
      element: <Home
        aboutMeSectionRef={aboutMeSectionRef}
        contactSectionRef={contactSectionRef}
        navHeight={navHeight}
        projectsSectionRef={projectsSectionRef}
        handleCheckHomeLoaded={handleCheckHomeLoaded}
      />
    },
    {
      path: '/blog',
      element: <Blog />
    }
  ]

  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: generalRoutes,
    }
  ])

  return (
    <Styled.MainDiv ref={mainDivRef} style={{ display: 'flex', flexDirection: 'column', minHeight: `${screenSize.height}px`}}>
      <MainNavigation
        aboutMeSectionRef={aboutMeSectionRef}
        contactSectionRef={contactSectionRef}
        mobileMenuShow={mobileMenuShow}
        projectsSectionRef={projectsSectionRef}
        handleLinkClick={handleLinkClick}
        setMobileMenuShow={setMobileMenuShow}
        setNavHeight={setNavHeight}
      />
      <div style={{ flex: '1' }}>
        <RouterProvider router={router} />
      </div>
      <Footer />
    </Styled.MainDiv>
  )
}

export default App
