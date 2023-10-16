import gql from 'graphql-tag'

const BLOG_QUERY = gql`
  query filterTagsQuery {
    posts {
      data {
        attributes {
          Tags
        }
      }
    }
  }
`

export default BLOG_QUERY