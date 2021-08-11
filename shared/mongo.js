// Importing the MongoClient
const { MongoClient } = require("mongodb");

// Mongo Client

// const url = "mongodb://localhost:27017";
// const dbname = "achu";
// const client = new MongoClient(url);
const client = new MongoClient(process.env.MONGODB_URL);

const mongo = {
  db: null,

  async connect() {
    await client.connect();
    console.log("Connected to Mongo...");

    // this.db = client.db(dbname);
    this.db = client.db(process.env.MONGODB_NAME);
    console.log(`'${process.env.MONGODB_NAME}' database is selected`);
  },
};

module.exports = mongo;
