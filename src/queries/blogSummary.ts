import gql from 'graphql-tag'

const BLOG_QUERY = gql`
  query postSummaryQuery($filterTagQuery: [PostFiltersInput], $searchQuery: String!) {
    posts(filters: { Title: { contains: $searchQuery }, or: $filterTagQuery }) {
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