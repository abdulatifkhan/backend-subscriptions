const { ApolloServer } = require("apollo-server");

const resolvers = require("./resolvers");
const typeDefs = require("./typeDefs");

const PORT = process.env.PORT || 5000;

const server = new ApolloServer({
   resolvers,
   typeDefs,
   subscriptions: {
     onConnect: () => console.log("New client"),
   }
})

server.listen(PORT, () => console.log(`This port: http://localhost:${PORT}`))