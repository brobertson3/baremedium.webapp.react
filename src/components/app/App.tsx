import { useEffect, useRef, useState } from 'react'
import './App.css'
import Home from '../home/Home'
import Blog from '../blog/Blog'
import MainNavigation from '../navigation/MainNavigation'
import Footer from '../footer/Footer'
import * as Styled from './app-style'
import useScreenSize from '../../hooks/useScreenSize'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Query from '../blog/Query'
import BLOG_QUERY from '../../queries/blog'
// import ApolloClient from 'apollo-boost'

function App() {
  const [navHeight, setNavHeight] = useState(0);
  const [noScroll, setNoScroll] = useState(false);
  const [mobileMenuShow, setMobileMenuShow] = useState(false)
  const aboutMeSectionRef = useRef<HTMLDivElement | null>(null);
  const contactSectionRef = useRef<HTMLDivElement | null>(null);
  const mainDivRef = useRef<HTMLDivElement | null>(null);
  const projectsSectionRef = useRef<HTMLDivElement | null>(null);

  const screenSize = useScreenSize();

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

  const handleLinkClick = (text: string) => {
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
    
    setMobileMenuShow(!mobileMenuShow)
    setNoScroll(!mobileMenuShow)

    if(mainDivRef?.current) {
      mainDivRef.current.style.position = !mobileMenuShow ? 'fixed' : 'static'
    }

    if (currentRef?.current) {
      currentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home
        aboutMeSectionRef={aboutMeSectionRef}
        contactSectionRef={contactSectionRef}
        navHeight={navHeight}
        projectsSectionRef={projectsSectionRef}
      />
    },
    {
      path: '/blog',
      element: <Blog />
    }
  ])

  return (
    <Styled.MainDiv ref={mainDivRef} $noscroll={noScroll} style={{ display: 'flex', flexDirection: 'column', minHeight: `${screenSize.height}px`}}>
      <MainNavigation
        aboutMeSectionRef={aboutMeSectionRef}
        contactSectionRef={contactSectionRef}
        mobileMenuShow={mobileMenuShow}
        projectsSectionRef={projectsSectionRef}
        handleLinkClick={handleLinkClick}
        setMobileMenuShow={setMobileMenuShow}
        setNavHeight={setNavHeight}
        setNoScroll={setNoScroll}
      />
      <div style={{ flex: '1' }}>
        <RouterProvider router={router} />
      </div>
      <Footer />
    </Styled.MainDiv>
  )
}

export default App
