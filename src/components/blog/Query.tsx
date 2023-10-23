import React from "react";
import { useQuery } from "@apollo/react-hooks";

// const IQueryProps = {
//   query: string;
//   filterTagQuery?: { 
//     Tags: { 
//       contains: string;
//     };;
//   }[]
//   postId?: string;
// }

const Query: IQueryProps = ({ children, query, filterTagQuery = null, postId = null }) => {
  const { data, loading, error } = useQuery(query, {
    variables: {
      filterTagQuery: filterTagQuery,
      postId: postId,
    }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;
  return children({ data });
};

export default Query;