const mongoose = require('mongoose');
require('dotenv').config()
const app = require('./app');
const { ApolloServer } = require('apollo-server-express');
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core');
const schemas = require('./schemas/index')
const http = require('http')

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(con =>{
    console.log('DB connection successful!');
});

//START SERVER
const port = process.env.NODE_PORT || 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});

startApolloServer(schemas.typeDefs, schemas.resolvers)

async function startApolloServer(typeDefs, resolvers) {
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();
  server.applyMiddleware({ app });
  await new Promise(resolve => httpServer.listen({ port: process.env.GRAPH_PORT }, resolve));
  console.log(`🚀 Server ready at http://localhost:${process.env.GRAPH_PORT}${server.graphqlPath}`);
}