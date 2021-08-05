const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Recipe {
        id: ID!
        name: String!
        category: String!
        description: String!
        instructions: String!
        imageUrl: String!
        createdDate: String
        likes: Int
        username: String
    }

    type User {
        id: ID!
        username: String!
        password: String!
        email: String!
        joinDate: String!
        favorites: [Recipe]
    }

    type Query {
        getAllRecipes: [Recipe]
    }

    type Mutation {
        addRecipe(name: String!, description: String!, category: String!, instructions: String!, username: String): Recipe
    }
`

module.exports = typeDefs