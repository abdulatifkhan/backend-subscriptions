const { PubSub } = require("apollo-server");

const pubSub = new PubSub()

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
    classifieds: () => [],
  },
  Mutation: {
    createClassified: () => {

      const newClassifed = {
        id: 'id',
        title: 'title', 
      }

      try {
        return newClassifed
      }
      finally {

        pubSub.publish("createdClassified", newClassifed)
      }
    }
  },
}

module.exports = resolvers