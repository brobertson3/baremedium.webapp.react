import gql from 'graphql-tag'

const BLOG_QUERY = gql`
  query {
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