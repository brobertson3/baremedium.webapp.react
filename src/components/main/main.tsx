import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../app/App.tsx'
import '../../index.css'
// import { createHttpLink } from "apollo-link-http";
// import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from '@apollo/react-hooks';
// import ApolloClient from 'apollo-boost';
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client'

export const link = createHttpLink({
  uri: "http://localhost:1337/graphql"
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
)
