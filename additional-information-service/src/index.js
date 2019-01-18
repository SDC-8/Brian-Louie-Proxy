import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { PreQuery } from './components/PreQuery.js';
import Main from './Main.js';

// const port = 8081;
//
// const client = new ApolloClient({
//   uri: 'http://hr-fec-otb.us-west-1.elasticbeanstalk.com/graphql',
// });


ReactDOM.render(
  <Main/>,
  document.getElementById('main'),
);


//
// ReactDOM.render(
//   <ApolloProvider client={client}>
//     <PreQuery />
//   </ApolloProvider>,
//   document.getElementById('main'),
// );
