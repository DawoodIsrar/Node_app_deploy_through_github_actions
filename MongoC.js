import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config(); // Ensure .env is loaded


const password = process.env.MONGO_PASS ? encodeURIComponent(process.env.MONGO_PASS.trim()) : "";

if (!password) {
  throw new Error("MONGO_PASS is missing. Check your .env file!");
}

const connectionString = `mongodb+srv://dawoodops:${password}@merndb.7tl0l.mongodb.net/?retryWrites=true&w=majority&appName=MernDb`;

const client = new MongoClient(connectionString);
let conn;

try {
  conn = await client.connect();
  console.log("Connection successful");
} catch (e) {
  console.error("MongoDB Connection Error:", e);
}

let db = conn?.db("MernDb"); // Prevents "Cannot read properties of undefined"
export default db;
