const resolvers = {
  Subscription: {

  },
  Query: {
    classifieds: () => [],
  },
  Mutation: {
    createClassified: () => {
      return {
        id: 'id',
        title: 'title'
      }
    }
  },
}

module.exports = resolvers