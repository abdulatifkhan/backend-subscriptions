const { ApolloServer } = require("apollo-server");

const PORT = process.env.PORT || 5000;

const server = ApolloServer({
   
})

server.listen(PORT, () => console.log(`This port: http://localhost:${PORT}`))