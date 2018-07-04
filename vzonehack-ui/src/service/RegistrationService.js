import ApolloClient, { gql } from 'apollo-boost';

export class RegistrationService {

    client = new ApolloClient({
        uri: 'http://10.74.22.231:3002/graphql'
    });

    GET_ALL_REGISTRATION = gql`
           query getAllRegistration {
            getAllRegistration {
                eventId
                vzId
                teamId
                teamName
               }
             } `;

    GET_MY_REGISTRATION = gql`
        query getMyRegistration($vzId: String!) {
            getMyRegistration(vzId: $vzId) {
                eventId
                vzId
                teamId
                teamName
            }
        } `;

    GET_EVENT_REGISTRATION = gql`
        query getEventRegistration($eventId: String!) {
            getEventRegistration(eventId: $eventId) {
                eventId
                vzId
                teamId
                teamName
            }
        } `;

    ADD_REGISTRATION = gql`
             mutation CreateEventQuery($eventId: String!, $vzId: String!, $teamId: Date!, $teamName: Date!) {
                 addEvent(eventId: $eventId, vzId: $vzId, teamId: $teamId, teamName: $teamName) {
                    eventId
                    vzId
                    teamId
                    teamName
                 }
               } `;

    getAllRegistration() {
        return this.client.query({
            query: this.GET_ALL_REGISTRATION
        }).then(results => results.data);
    }

    getMyRegistration(vzId) {
        return this.client.query({
            query: this.GET_MY_REGISTRATION,
            variable: {
                "vzId": vzId
            }
        }).then(results => results.data);
    }

    getEventRegistration(eventId) {
        return this.client.query({
            query: this.GET_EVENT_REGISTRATION,
            variable: {
                "eventId": eventId
            }
        }).then(results => results.data);
    }

    addRegistration(eventId, vzId, teamId, teamName) {
        return this.client.mutate({
            mutation: this.ADD_REGISTRATION,
            variables: {
                "eventId": eventId,
                "vzId": vzId,
                "teamId": teamId,
                "teamName": teamName
            }
        }).then(results => results.data);
    }
}