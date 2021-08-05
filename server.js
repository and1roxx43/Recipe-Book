const express = require("express");
require("dotenv").config();

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

// server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

db.once("open", () => {
    app.listen(process.env.PORT, () => {
        console.log(`Server running on ${process.env.PORT}`);
        console.log(`Use GraphQL at http://localhost:${process.env.PORT}${apolloServer.graphqlPath}`);
    });
});