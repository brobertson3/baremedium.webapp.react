import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import * as Styled from './blog-query-style'
import * as Shared from '../shared-style'

// const IQueryProps = {
//   query: string;
//   filterTagQuery?: { 
//     Tags: { 
//       contains: string;
//     };;
//   }[]
//   postId?: string;
// }

const Query: IQueryProps = ({ children, query, filterTagQuery = null, searchQuery = '', postId = null }) => {
  console.log('filterTagQuery: ', filterTagQuery)
  console.log('searchQuery: ', searchQuery)
  console.log('postId: ', postId)
  const { data, loading, error } = useQuery(query, {
    variables: {
      filterTagQuery: filterTagQuery,
      postId: postId,
      searchQuery: searchQuery,
    },
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'cache-first',
  });

  if (loading) {
    return (
      <Styled.BlogQueryContainer>
        <Styled.CustomFontAwesomeIcon width={40} height={40} $iconcolor={Shared.customBlue} spinPulse icon={faSpinner as IconProp} />
      </Styled.BlogQueryContainer>
    )
  }

  if (error) {
    console.log('this is error: ', error)
    return <p>Error: {JSON.stringify(error)}</p>;
  }

  return children({ data });
};

export default Query;