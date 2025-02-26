import { MongoClient } from "mongodb";

const password = encodeURIComponent(process.env.MONGO_PASS.trim());
const connectionString = `mongodb+srv://dawoodops:${password}@devcluster.xf2gcci.mongodb.net/?retryWrites=true&w=majority`; // clustore url
const client = new MongoClient(connectionString);
let conn;
try {
  conn = await client.connect();
  console.log("connection successful")
} catch(e) {
  console.error(e);
}
let db = conn.db("MernDb");
export default db;