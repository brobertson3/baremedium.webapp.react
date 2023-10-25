import * as Styled from './blog-post-style'
import ReactMarkdown from "react-markdown";
import { format } from 'date-fns'

const BlogPost = ({ postData }) => {
  console.log('this is postData: ', postData)
  return (
    <>
      <Styled.BlogPostHeader>
        <Styled.BlogPostTitle>{postData.attributes.Title}</Styled.BlogPostTitle>
        <Styled.BlogPostMetaContainer>
          <Styled.BlogPostAuthorContainer>by<Styled.BlogPostAuthor>{postData.attributes.writer.data.attributes.Name}</Styled.BlogPostAuthor></Styled.BlogPostAuthorContainer>
          <Styled.BlogPostDate>{format(new Date(postData.attributes.Date), 'MMM dd, yyyy')}</Styled.BlogPostDate>
        </Styled.BlogPostMetaContainer>
      </Styled.BlogPostHeader>
      
      <Styled.BlogPostContent>
        <ReactMarkdown>
          {postData.attributes.Content}
        </ReactMarkdown>
      </Styled.BlogPostContent>
    </>
  )
}

export default BlogPost