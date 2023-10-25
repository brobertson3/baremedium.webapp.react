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
import * as Styled from './blog-post-style'
import BlogPost from './BlogPost'
import SocialLinks from '../social-links/SocialLinks'

function BlogPostPage() {
  const { postId } = useParams()

  return (
    <Shared.Main>
      <SocialLinks />
      <Styled.BlogPostContainer>
        <Query
          query={BLOG_DETAILS_QUERY}
          postId={postId?.toString()}
        >
          {({ data: { posts }}) => {
            return (
              <BlogPost postData={posts.data[0]} />
            )
          }}
        </Query>
      </Styled.BlogPostContainer>
    </Shared.Main>
  )
}

export default BlogPostPage
