const express = require("express");
require("dotenv").config();
const http = require("http");

const cors = require("cors")

const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

const app = express();



let apolloServer = null;
async function startServer() {
    apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
}
startServer();

// const server = new ApolloServer({
//     typeDefs,
//     resolvers,
//   });

// server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });

db.once("open", () => {
    app.listen(process.env.PORT, () => {
        console.log(`Server running on ${process.env.PORT}`);
        console.log(`Use GraphQL at http://localhost:${process.env.PORT}${apolloServer.graphqlPath}`);
    });
});