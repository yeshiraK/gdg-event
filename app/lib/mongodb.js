import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI; // Mongo URI from .env.local
console.log("Mongo URI: ", process.env.MONGODB_URI); // Log the URI to check if it's correct

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = MongoClient.connect(uri, options);
  }
  clientPromise = global._mongoClientPromise;
} else {
  clientPromise = MongoClient.connect(uri, options);
}

export default clientPromise;
