const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const cors = require("cors");
const multer = require("multer");

const app = express();
app.use(cors());

const CONNECTION_STRING = "mongodb+srv://ifhamkhan105:ImAnAn007%40@cluster0.fq5yw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const DATABASENAME = "todoappdb";
let database;

const connectToDatabase = async () => {
    try {
        const client = await MongoClient.connect(CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });
        database = client.db(DATABASENAME);
        console.log("Mongo DB Connection Successful");
    } catch (error) {
        console.error("Failed to connect to the database", error);
    }
};

app.listen(5038, async () => {
    await connectToDatabase();
    console.log("Server is listening on port 5038");
});
