import React, { useEffect, useState } from 'react'
// import * as Styled from './app-style'
// import useScreenSize from '../../hooks/useScreenSize'
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
import { format } from 'date-fns'
import '../app/App.css'
import * as Styled from './blog-style'
import * as Shared from '../shared-style'

import Query from './Query'
import BLOG_SUMMARY_QUERY from '../../queries/blogSummary'
import BLOG_FILTER_TAGS_QUERY from '../../queries/blogFilterTags'
import BlogPostPage from './BlogPostPage'
import ReactMarkdown from "react-markdown";
import isTextEmpty from '../../utils/text/isTextEmpty'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faCaretUp, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import '../blog/Blog.css'
import SocialLinks from '../social-links/SocialLinks'

interface ITagProps {
  Tags: {
    contains: string
  }
}

function Blog() {

  const [searchText, setSearchText] = useState('');
  const [submittedSearchText, setSubmittedSearchText] = useState('');
  const [isSearchBoxFocused, setIsSearchBoxFocused] = useState(false);
  // const [blogTags, setBlogTags] = useState([]);
  const [checkedTags, setCheckedTags] = useState(['all']);
  const [filterTagQuery, setFilterTagQuery] = useState<ITagProps[]>([]);
  const [showMobileFilterList, setShowMobileFilterList] = useState(true);
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(true);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value)
  }

  const handleSearchSubmit = () => {
    setSubmittedSearchText(searchText)
  }

  const handleSearchFocus = () => {
    setIsSearchBoxFocused(true)
  }

  const handleSearchBlur = () => {
    setIsSearchBoxFocused(false)
  }

  const handleFilterCheckboxClick = (e) => {
    const newCheckedTags = checkedTags.includes(e.target.value) ? checkedTags.filter((tag) => tag !== e.target.value) : [...checkedTags, e.target.value]
    
    setCheckedTags(newCheckedTags)
  }

  useEffect(() => {
    let newTagQuery: ITagProps[] = []

    if (checkedTags.length > 0 && !checkedTags.includes("all")) {
      // Example GraphQL filter [{ Tags: { contains: "development" } }, { Tags: { contains: "test" }}]
      newTagQuery = checkedTags.map((tag) => {
        return { Tags: { contains: tag } }
      })
    } else {
      newTagQuery.push({ Tags: { contains: '' } })
    }

    setFilterTagQuery(newTagQuery)
  }, [checkedTags])

  const handleDropdownButtonClick = () => {
    setIsFilterDropdownOpen(!isFilterDropdownOpen);
    setShowMobileFilterList(!showMobileFilterList);
  }

  const BlogSummaryCards = ({data}) => {
    console.log('this is data in blog: ', data.data)
    const handleBlogPostClick = (postId) => {
      window.location.href = `blog/${postId}`
    }

    return (
      <>
        {
          data.data.map((post, index) => {
            return (
              <Styled.BlogSummaryCardContainer key={`BlogSummaryCardContainer-${index}`}>
                <Styled.BlogSummaryCardCoverOuterContainer>
                  <Styled.BlogSummaryCardCoverContainer $coverurl={`${import.meta.env.VITE_BASE_URL}${post.attributes.Cover.data.attributes.url}`} />
                </Styled.BlogSummaryCardCoverOuterContainer>
                <Styled.BlogSummaryCardContent>
                  <Styled.BlogSummaryCardTitle>{post.attributes.Title}</Styled.BlogSummaryCardTitle>
                  <Styled.BlogSummaryCardMeta>by {post.attributes.writer.data.attributes.Name}</Styled.BlogSummaryCardMeta>
                  <Styled.BlogSummaryCardMeta>{format(new Date(post.attributes.Date), 'MMM dd, yyyy')}</Styled.BlogSummaryCardMeta>
                  <Styled.BlogSummaryCardLearnMore onClick={() => { handleBlogPostClick(post.id) }}>Learn More &gt;</Styled.BlogSummaryCardLearnMore>
                </Styled.BlogSummaryCardContent>
                {/* <ReactMarkdown>{post.attributes.Content}</ReactMarkdown> */}
              </Styled.BlogSummaryCardContainer>
            )
          })
        }
      </>
    )
  }

  const BlogFilter = ({ tags }) => {
    console.log('these are tags: ', tags)
    const finalTags = ['all']
    tags.data.map((tag: {attributes: { Tags: string }}) => {
      const splitCheckedTags = tag.attributes.Tags.split(',')
      const newTagsToInclude = splitCheckedTags.filter((splitTag: string) => {
        const trimmedTag: string = splitTag.trim()
        return !finalTags.includes(trimmedTag)
      }).map((mapTag) => mapTag.trim())
      finalTags.push(...newTagsToInclude)
    })
   
    return (
      <>
        <Styled.BlogFilterTitleContainer>
          <Styled.BlogFilterTitle>Filter</Styled.BlogFilterTitle>
          <Styled.CustomFontAwesomeIcon
            width={20}
            height={20}
            $iconcolor='#FFFFFF'
            icon={faCaretUp as IconProp}
            $isOpen={isFilterDropdownOpen}
            onClick={handleDropdownButtonClick}
          />
        </Styled.BlogFilterTitleContainer>
        {
          <Styled.BlogFilterList $isOpen={isFilterDropdownOpen}>
            {
              finalTags.map((tag, index) => (
                <Styled.BlogFilterListItem key={`blogFilterTag-${index}`}>
                  <Styled.BlogFilterCheckbox
                    onChange={handleFilterCheckboxClick}
                    type='checkbox'
                    checked={checkedTags.includes(tag)}
                    value={tag}
                  />
                  <Styled.BlogFilterText>{tag}</Styled.BlogFilterText>
                </Styled.BlogFilterListItem>
              ))
            }
          </Styled.BlogFilterList>
        }
      </>
    )
  }

  return (
    <Shared.Main style={{ marginRight: '0' }}>
      <SocialLinks />
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
        <Styled.SearchBoxButton onClick={handleSearchSubmit}>
          <Styled.CustomFontAwesomeIcon width={24} height={24} $iconcolor={Shared.customBlue} icon={faMagnifyingGlass as IconProp} />
        </Styled.SearchBoxButton>
      </Styled.SearchBoxContainer>

      <Styled.BlogLayout>
        <Styled.BlogFilterContainer>
          <Query
            query={BLOG_FILTER_TAGS_QUERY}
            id={null}
          >
            {({ data: { posts }}) => {
              console.log('here are list of tags: ', posts)
              return (
                <BlogFilter tags={posts} />
              )
            }}
          </Query>
        </Styled.BlogFilterContainer>
        <Styled.BlogFilterCardsContainer>
          <Query
            query={BLOG_SUMMARY_QUERY}
            filterTagQuery={filterTagQuery}
            searchQuery={submittedSearchText}
          >
            {({ data: { posts }}) => {
              console.log('this is data: ', posts)
              if (posts.data.length > 0) {
                return (
                  <Styled.BlogSummaryContainer>
                    <BlogSummaryCards data={posts} />
                  </Styled.BlogSummaryContainer>
                )
              }
              return (
                <Styled.BlogSummaryEmptyContainer>
                  <p>Sorry, no posts were found</p>
                </Styled.BlogSummaryEmptyContainer>
              )
            }}
          </Query>
        </Styled.BlogFilterCardsContainer>
      </Styled.BlogLayout>
    </Shared.Main>
  )
}

export default Blog
