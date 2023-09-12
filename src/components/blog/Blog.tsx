import React, { useState } from 'react'
// import * as Styled from './app-style'
// import useScreenSize from '../../hooks/useScreenSize'
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
import '../app/App.css'
import * as Styled from './blog-style'
import * as Shared from '../shared-style'

import Query from './Query'
import BLOG_QUERY from '../../queries/blog'
import BlogPost from './BlogPost'
import ReactMarkdown from "react-markdown";
import isTextEmpty from '../../utils/text/isTextEmpty'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import '../blog/Blog.css'

function Blog() {

  const [searchText, setSearchText] = useState('');
  const [isSearchBoxFocused, setIsSearchBoxFocused] = useState(false);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value)
  }

  const handleSearchFocus = () => {
    setIsSearchBoxFocused(true)
  }

  const handleSearchBlur = () => {
    setIsSearchBoxFocused(false)
  }

  const BlogMain = ({data}) => {
    console.log('this is data in blog: ', data.data)
    return (
      <>
        {
          data.data.map((post, index) => {
            return (
              <>
                <h1>Title: {post.attributes.Title}</h1>
                <ReactMarkdown>{post.attributes.Content}</ReactMarkdown>
              </>
            )
          })
        }
      </>
      
    )
  }

  return (
    <Shared.Main>
      <Styled.TitleContainer>
        <Styled.Title>Blog</Styled.Title>
      </Styled.TitleContainer>
      <Styled.SearchBoxContainer $isnotexpanded={isTextEmpty(searchText) && !isSearchBoxFocused}>
        <Styled.SearchBox
          type='text'
          placeholder='Search posts'
          value={searchText}
          onChange={handleSearchChange}
          onFocus={handleSearchFocus}
          onBlur={handleSearchBlur}
        />
        <Styled.SearchBoxButton>
          <Styled.CustomFontAwesomeIcon width={30} height={30} $iconcolor={Shared.customBlue} icon={faMagnifyingGlass as IconProp} />
        </Styled.SearchBoxButton>
      </Styled.SearchBoxContainer>
      
      <Query query={BLOG_QUERY} id={null}>
        {({ data: { posts }}) => {
          console.log('this is data: ', posts)
          return (
            <BlogMain data={posts} />
          )
        }}
      </Query>
    </Shared.Main>
  )
}

export default Blog
