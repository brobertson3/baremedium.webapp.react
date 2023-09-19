import gql from 'graphql-tag'

const BLOG_QUERY = gql`
  query {
    posts {
      data {
        attributes {
          Date
          Summary
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
          Title
        }
      }
    }
  }
`

export default BLOG_QUERY