export default {
  Query: {
    getAllUsers: async (parent, args, { User }) => {
      const user = await User.find(args)
      return user
    },
    getUserbyVzId: async (parent, args, { User }) => {
      const user = await User.find(args)
      return user
    },
    getUserbyLocation: async (parent, args, { User }) => {
      const user = await User.find(args)
      return user
    },
    getUserbyPortfolio: async (parent, args, { User }) => {
      const user = await User.find(args)
      return user
    },

    getAllEvents: async (parent, args, { Event }) => {
      const event = await Event.find(args)
      return event
    },
    getEventsByLocation: async (parent, args, { Event }) => {
      const event = await Event.find(args)
      return event
    },
    getEventsByPortfolio: async (parent, args, { Event }) => {
      const event = await Event.find(args)
      return event
    },

    getCompletedEvents: async (parent, args, { Event }) => {
      console.log(Event)
      const events = await Event.find(args)
      var resp = []
      var current = new Date().getTime()

      events.map(x => {
        var end = x.eventEndDate.getTime()
        if (end < current) resp.push(x)
      })
      return resp
    },
    getUpcomingEvents: async (parent, args, { Event }) => {
      const events = await Event.find(args)
      var resp = []
      var current = new Date().getTime()
      //if (!events === undefined) {
        events.map(x => {
          var start = x.eventStartDate.getTime()
          var end = x.eventEndDate.getTime()

          if (start > current) resp.push(x)
        })
      //}
      return resp
    },
    getOngoingEvents: async (parent, args, { Event }) => {
      const events = await Event.find(args)

      var resp = []
      var current = new Date().getTime()

      events.map(x => {
        var start = x.eventStartDate.getTime()
        var end = x.eventEndDate.getTime()

        if (start < current && current < end) resp.push(x)
      })
      return resp
    },

    getAllRegistration: async (parent, args, { Registration }) => {
      const registeration = await Registration.find(args)
      return registeration
    },

    getEventRegistration: async (parent, args, { Registration }) => {
      const registeration = await Registration.find(args)
      return registeration
    },

    getMyRegistration: async (parent, args, { Registration }) => {
      const registeration = await Registration.find(args)
      return registeration
    },

    getMyTeam: async (parent, args, { Registration }) => {
      const registeration = await Registration.find(args)
      return registeration
    },

    getUser: async (parent, args, { VZUser }) => {
      const user = await VZUser.find(args)
      return user
    },
  },
  Mutation: {
    addUser: async (parent, args, { User }) => {
      const user = await new User(args).save()
      user._id = user._id.toString()
      return user
    },
    addEvent: async (parent, args, { Event }) => {
      const event = await new Event(args).save()
      event._id = event._id.toString()
      return event
    },

    addEventAuto: async (parent, args, { Event }) => {
 
      const event = await new Event(args).save()
      event._id = event._id.toString()
      return event

      
    },
   
    addRegistration: async (parent, args, { Registration }) => {
      const registration = await new Registration(args).save()
      registration._id = registration._id.toString()
      return registration
    },
    upLikeCount: async (parent, args, { Event }) => {
      const events = await Event.find(args)
      var resp=[];

      return events.map(x => {
       
        x.set({ likesCount: x.likesCount ? x.likesCount + 1 : 1 })
        x.save()
     
       return x
      })
  
      return  events
    },

    upViewCount: async (parent, args, { Event }) => {
      const events = await Event.find(args)
      var resp=[];

      return events.map(x => {
       
        x.set({ viewCount: x.viewCount ? x.viewCount + 1 : 1 })
        x.save()
     
       return x
      })
  
      return  events
    },


    /**createTalk: async (parent, args, { Talk }) => {
      const talk = await new Talk(args).save()
      talk._id = talk._id.toString()
      return talk
    },
  
 
    upvoteTalk: async (parent, args, { Talk }) => {
      const talk = await Talk.findById(args.id)
      talk.set({ votes: talk.votes ? talk.votes + 1 : 1 })
      await talk.save()
      return talk
    },  **/
  },
}
