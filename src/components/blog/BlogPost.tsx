// import { useEffect, useRef, useState } from 'react'
// import * as Styled from './app-style'
// import useScreenSize from '../../hooks/useScreenSize'
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
import '../app/App.css'
import * as Shared from '../shared-style'
import ReactMarkdown from "react-markdown";

function BlogPost({ data }) {
  const { Title } = data
  return (
    <>
      <h1>Title: {Title}</h1>
    </>
  )
}

export default BlogPost
