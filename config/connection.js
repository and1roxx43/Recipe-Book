const mongoose = require("mongoose");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb+srv://"+process.env.DB_PASS+"@cluster0.j5j1s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true, 
        useCreateIndex: true,
        useFindAndModify:false,
    }
);

module.exports = mongoose.connection;