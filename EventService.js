import axios from 'axios';
import ApolloClient, { gql } from 'apollo-boost';

export class EventService {

    client = new ApolloClient({
        uri: 'http://10.74.22.231:3002/graphql'
    });

    GET_EVENTS = gql`
           query getEventQuery {
               getAllEvents {
                 eventId
                 eventName
                 eventType
                 eventStartDate
                 eventEndDate
                 nominationStartDate
                 nominationEndDate
                 minTeamSize
                 maxTeamSize
                 eventPortfolio
                 eventLocation
                 eventPOCMail
                 viewCount
                 likesCount
               }
             } `;

    getEvents() {
        return axios.get('assets/demo/data/scheduleevents.json')
            .then(res => res.data.data);
    }

    getAllEvents() {
        console.log("Calling getAllEvents");
        return this.client.query({
            query: this.GET_EVENTS
        }).then(results => results.data);
    }
}
