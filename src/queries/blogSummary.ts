import gql from 'graphql-tag'

const BLOG_QUERY = gql`
  query postSummaryQuery($filterTagQuery: [PostFiltersInput]) {
    posts(filters: { or: $filterTagQuery }) {
      data {
        id
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