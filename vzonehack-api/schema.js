export default `

scalar Date

type VZUser {
  vzid: String
  firstName: String
  lastName: String
  eMail: String
}

type User {
  vzId: String
  firstName: String
  lastName: String
  email: String
  portfolio: String
  location: String
  phoneNo: String
}

type Event {
  eventId: String
  eventName: String
  eventType: String
  eventStartDate: Date
  eventEndDate: Date
  nominationStartDate: Date
  nominationEndDate: Date
  minTeamSize: Int
  maxTeamSize: Int
  eventPortfolio: String
  eventLocation: String
  eventPOCMail: String
  multipleParticipationAllowed: Boolean
  viewCount: Int
  likesCount: Int
}

type Registration {
  vzId: String
  eventId: String
  teamId: String
  teamName: String
}


type EventDetail {
  problemId: Int
  eventId: Int
  problemStatement: String
  eventPOCMail: String
  Rules: String
}

type EventPrize {
   prizeId: Int
   eventId: Int
   prize: String
   prizeName: String
}

type EventResult {
  prizeId: Int
  eventId: Int
  teamId: Int

}

type Query {
  getAllUsers(
    vzId: String,
    firstName: String,
    lastName: String,
    email: String,
    portfolio: String,
    location: String,
    phoneNo: String
  ): [User!]!,
  getUserbyVzId(
    vzId: String!,
    firstName: String,
    lastName: String,
    email: String,
    portfolio: String,
    location: String,
    phoneNo: String
  ): [User!]!,
  getUserbyLocation(
    vzId: String,
    firstName: String,
    lastName: String,
    email: String,
    portfolio: String,
    location: String!,
    phoneNo: String
  ): [User!]!,
  getUserbyPortfolio(
    vzId: String,
    firstName: String,
    lastName: String,
    email: String,
    portfolio: String!,
    location: String,
    phoneNo: String
  ): [User!]!,
  getAllEvents(
    eventId: String,
  eventName: String,
  eventType: String,
  eventStartDate: Date,
  eventEndDate: Date,
  nominationStartDate: Date,
  nominationEndDate: Date,
  minTeamSize: Int,
  maxTeamSize: Int,
  eventPortfolio: String,
  eventLocation: String,
  eventPOCMail: String,
  viewCount: Int,
  likesCount: Int
  ): [Event!]!,
  getEventsByLocation(
    eventId: String,
  eventName: String,
  eventType: String,
  eventStartDate: Date,
  eventEndDate: Date,
  nominationStartDate: Date,
  nominationEndDate: Date,
  minTeamSize: Int,
  maxTeamSize: Int,
  eventPortfolio: String,
  eventLocation: String!,
  eventPOCMail: String,
  viewCount: Int,
  likesCount: Int
  ): [Event!]!,
  getEventsByPortfolio(
    eventId: String,
  eventName: String,
  eventType: String,
  eventStartDate: Date,
  eventEndDate: Date,
  nominationStartDate: Date,
  nominationEndDate: Date,
  minTeamSize: Int,
  maxTeamSize: Int,
  eventPortfolio: String!,
  eventLocation: String,
  eventPOCMail: String,
  viewCount: Int,
  likesCount: Int
  ): [Event!]!,
  getUpcomingEvents(
    eventId: String,
  eventName: String,
  eventType: String,
  eventStartDate: Date,
  eventEndDate: Date,
  nominationStartDate: Date,
  nominationEndDate: Date,
  minTeamSize: Int,
  maxTeamSize: Int,
  eventPortfolio: String,
  eventLocation: String,
  eventPOCMail: String,
  viewCount: Int,
  likesCount: Int
  ): [Event!]!,
  getOngoingEvents(
    eventId: String,
  eventName: String,
  eventType: String,
  eventStartDate: Date,
  eventEndDate: Date,
  nominationStartDate: Date,
  nominationEndDate: Date,
  minTeamSize: Int,
  maxTeamSize: Int,
  eventPortfolio: String,
  eventLocation: String,
  eventPOCMail: String,
  viewCount: Int,
  likesCount: Int
  ): [Event!]!,
  getCompletedEvents(
    eventId: String,
  eventName: String,
  eventType: String,
  eventStartDate: Date,
  eventEndDate: Date,
  nominationStartDate: Date,
  nominationEndDate: Date,
  minTeamSize: Int,
  maxTeamSize: Int,
  eventPortfolio: String,
  eventLocation: String,
  eventPOCMail: String,
  viewCount: Int,
  likesCount: Int
  ): [Event!]!,
  getAllRegistration(
    vzId: String,
  eventId: String,
  teamId: String,
  teamName: String
  ): [Registration!],
  getEventRegistration(
    vzId: String,
  eventId: String!,
  teamId: String,
  teamName: String
  ): [Registration!],
  getMyRegistration(
    vzId: String!,
  eventId: String,
  teamId: String,
  teamName: String
  ): [Registration!],
  getMyTeam(
    vzId: String,
  eventId: String!,
  teamId: String!,
  teamName: String
  ): [Registration!],

  getUser(
    vzid: String,
    firstName: String,
    lastName: String,
    eMail: String
  ): [VZUser!]

}

type Mutation {
  addUser(
    vzId: String!,
    firstName: String!,
    lastName: String!,
    email: String!,
    portfolio: String!,
    location: String!,
    phoneNo: String!
  ): User!

  addEvent(
  eventId: Int,
  eventName: String!,
  eventType: String!,
  eventStartDate: Date!,
  eventEndDate: Date!,
  nominationStartDate: Date!,
  nominationEndDate: Date!,
  minTeamSize: Int!,
  maxTeamSize: Int!,
  eventPortfolio: String!,
  eventLocation: String!,
  eventPOCMail: String!,
  viewCount: Int,
  likesCount: Int
  ): Event!


  addEventAuto(
    eventId: Int,
    eventName: String!,
    eventType: String!,
    eventStartDate: Date!,
    eventEndDate: Date!,
    nominationStartDate: Date!,
    nominationEndDate: Date!,
    minTeamSize: Int!,
    maxTeamSize: Int!,
    eventPortfolio: String!,
    eventLocation: String!,
    eventPOCMail: String!,
    viewCount: Int,
    likesCount: Int
    ): Event!

upLikeCount(
    eventId: Int!
  ): [Event!]!

  upViewCount(
    eventId: Int!
  ): [Event!]!


  addRegistration(
    vzId: String!,
  eventId: String!,
  teamId: String!,
  teamName: String!
  ): Registration!

  createUser(
    vzid: String!,
    firstName: String!,
    lastName: String!,
    eMail: String!
  ): VZUser!
}

`
