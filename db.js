import { MongoClient, ServerApiVersion } from "mongodb";

const localUri = `mongodb://localhost:27017`;
const remoteUri = process.env.MONGODB_REMOTE_URI;

const whichUri = () => {
  if (process.env.NODE_ENV === "development") {
    return localUri;
  } else if (process.env.NODE_ENV === "production") {
    return remoteUri;
  }
};

const MongoDBInstance = new MongoClient(whichUri(), {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

let cachedClient = null;
let cachedDb = null;

export const connectDB = async () => {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }
  const client = await MongoDBInstance.connect();
  const db = client.db("documentation");

  cachedClient = client;
  cachedDb = db;

  return {
    client,
    db,
  };
};
