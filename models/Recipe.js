const { Schema, model } = require("mongoose");

const RecipeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,    
    },
    description: {
        type: String,
        required: true,
    },
    instructions: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: false
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    likes: {
        type: Number,
        default: 0,
    },
    username: {
        type: String,
    }

    });

    const Recipe = model("Recipe", RecipeSchema);

    module.exports = Recipe;

