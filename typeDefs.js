const { gql } = require("apollo-server");

const typeDefs = gql`

  union Response = Classified | Error

  type Error {
    code: Int
    message: String!
  }

  type Classified {
    id: ID!
    title: String!
  }

  type Query {
    classifieds(cat: String!): [Classified!]!
  }

  type Mutation {
    createClassified(title: String!): Response!
  }

  type Subscription {
    createdClassified: Classified!
  }
`

module.exports = typeDefs