# noname_r

--Users no param--
query getAllUsers {
  getAllUsers {
    vzId
    firstName
    lastName
    email
    portfolio
    location
    phoneNo
  }
}

--Users one param--
query getUserbyLocation {
  getUserbyLocation(location:"hYD") {
    vzId
    firstName
    lastName
    email
    portfolio
    location
    phoneNo
  }
}
--Users one or more param--
query getUserbyLocation {
  getUserbyPortfolio(portfolio:"VES",vzId: "v222222"
  ) {
    vzId
    firstName
    lastName
    email
    portfolio
    location
    phoneNo
  }
}

---------------------------------------------------------------------------------------------------------------------------------
query getEventQuery {
  getAllEvents {
    eventId
    eventName
    eventType
    eventStartString
    eventEndString
    nominationStartString
    nominationEndString
    minTeamSize
    maxTeamSize
    eventPortfolio
    eventLocation
    eventPOCMail
    viewCount
    likesCount
  }
}

--------------------------------------------------------------------------------------------------------------------------------

query geRegistratioQuery {
  getAllRegistration {
    vzId
    eventId
    teamId
    teamName
  }
}


