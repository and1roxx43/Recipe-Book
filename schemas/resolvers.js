const model = require("../models");

const resolvers = {
    Query: {
        async getAllRecipes() {
            return await model.Recipe.find({})
        }
    },
    Mutation: {
        async addRecipe(parent, { name, description, category, instructions, username }){
            const result = await model.Recipe.create({ name, description, category, instructions, username})

            return result;
           
        }
    }
}

module.exports = resolvers;