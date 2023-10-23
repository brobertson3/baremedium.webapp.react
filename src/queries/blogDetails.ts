import gql from 'graphql-tag'

const BLOG_QUERY = gql`
  query postDetailsQuery($postId: ID) {
    posts(filters: { id: { eq: $postId }}) {
      data {
        attributes {
          Date
          Content
          Cover {
            data {
              attributes {
                url
              }
            }
          }
          writer {
            data {
              attributes {
                Name
                Bio
                Avatar {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
          Tags
          Title
        }
      }
    }
  }
`

export default BLOG_QUERY