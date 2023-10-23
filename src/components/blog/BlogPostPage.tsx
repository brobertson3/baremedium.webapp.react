// import { useEffect, useRef, useState } from 'react'
// import * as Styled from './app-style'
// import useScreenSize from '../../hooks/useScreenSize'
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
import { useParams } from 'react-router-dom';
import '../app/App.css'
import Query from './Query'
import BLOG_DETAILS_QUERY from '../../queries/blogDetails'
import * as Shared from '../shared-style'
import ReactMarkdown from "react-markdown";

function BlogPostPage() {
  const { postId } = useParams()

  const BlogPost = ({ postData }) => {
    console.log('this is postData: ', postData)
    return (
      <p>blog post</p>
    )
  }

  return (
    <>
      <h1>Title: {postId}</h1>
      <Query
        query={BLOG_DETAILS_QUERY}
        postId={postId?.toString()}
      >
        {({ data: { posts }}) => {
          console.log('here is the blog post data: ', posts)
          return (
            <BlogPost postData={posts} />
          )
        }}
      </Query>
    </>
  )
}

export default BlogPostPage
