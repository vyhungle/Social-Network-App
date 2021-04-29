import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';

import { setContext } from "apollo-link-context";
import { getAccessToken } from '../context/auth';

const httpLink = createHttpLink({
    uri: 'https://server-webapp-mxh.herokuapp.com/'
  })
const authLink = setContext(async() => {
    let token = await getAccessToken();
    return {
      headers: {
        Authorization: token ? `Bearer ${token}` : ''
      }
    };
  });
export const client=new ApolloClient({
    link:authLink.concat(httpLink),
    cache: new InMemoryCache()
})