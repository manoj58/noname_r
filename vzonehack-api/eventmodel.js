import mongoose from 'mongoose'


const Event = mongoose.model('event', {
  eventId: Number,
  eventName: String,
  eventType: String,
  eventStartDate: Date,
  eventEndDate: Date,
  nominationStartDate: Date,
  nominationEndDate: Date,
  minTeamSize: Number,
  maxTeamSize: Number,
  eventPortfolio: String,
  eventLocation: String,
  eventPOCMail: String,
  multipleParticipationAllowed: Boolean,
  viewCount: Number,
  likesCount: Number
})




/**
 * 
mutation CreateUSERForTest {
  createUser(vzid: "v1111111", firstName: "MANOJ", lastName:  "SEKAR",
    eMail: "test@VERIZON.COM") {
    vzid
    ,firstName,lastName,eMail
  }
}

 */

export default Event
