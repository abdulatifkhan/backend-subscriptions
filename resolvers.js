const { PubSub } = require("apollo-server");

const pubSub = new PubSub()

const classifieds = []

const resolvers = {

  Subscription: {

    createdClassified: {

      subscribe: () => {

        return pubSub.asyncIterator(["createdClassified"])
      },

      resolve: (payload) => {

        return payload
      },
    },
  },

  Query: {

    classifieds: (_, { cat }) => {

      if (cat === "Hello") {

        return []
      }
      
      return classifieds
    },
  },

  Mutation: {

    createClassified: (_, { title }) => {

      const newClassifed = {
        id: classifieds.length + 1,
        title, 
      }

      try {
        classifieds.push(newClassifed)

        return newClassifed
      }
      finally {
        pubSub.publish("createdClassified", newClassifed)
      }
    }
  },

  Response: {
    __resolveType: (obj) => obj.id ? 'Classified' : 'Error',
  },
}

module.exports = resolvers