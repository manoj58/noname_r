# noname_r


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

mutation CreateUSERForTest {
  addUser(
    vzId: "v222222", 
    firstName: "MANOJ",
    lastName: "SEKAR", 
    email: "test@VERIZON.COM",
  	portfolio:"VES",
    location: "hYD",
  	phoneNo:"111111",
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
