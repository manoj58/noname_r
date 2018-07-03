// import 'cross-fetch/polyfill';
import ApolloClient, { gql } from 'apollo-boost';

class GraphQLClient {

    userInfo;
    eventInfo;
    
    client = new ApolloClient({
        uri: 'http://10.74.22.231:3001/graphql'    
    });

    setData(data){
        this.userInfo=data;
    }

    getAllUsers() {
        let GET_USER = gql`
        query queryDetails {
            user {
            vzId
            firstName
            lastName
            }
        } `;

    this.client.query({
        query: GET_USER
    }).then(results => {
       this.setData(results.data)
    });
        
    return this.userInfo;
    }

    addEvent() {
        let ADD_EVENT = gql`
        query queryDetails {
            user {
            vzId
            firstName
            lastName
            }
        } `;

    this.client.query({
        query: ADD_EVENT
    }).then(results => {
       this.setData(results.data)
    });
        
    return this.userInfo;
    }
}

export default GraphQLClient;

/*
To invoke this, you can import below -

import GraphQLClient from './GraphQLClient';

And then create Object and call method like 

var graphQLClient = new GraphQLClient();
graphQLClient.getAllUsers();
*/
