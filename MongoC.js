import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Load .env manually (in case it's not auto-loaded)
dotenv.config({ path: path.resolve(__dirname, ".env") });

const password = process.env.MONGO_PASS ? encodeURIComponent(process.env.MONGO_PASS.trim()) : "";

if (!password) {
  throw new Error("MONGO_PASS is missing. Check your .env file or environment variables!");
}

const connectionString = `mongodb+srv://dawoodops:${password}@merndb.7tl0l.mongodb.net/?retryWrites=true&w=majority&appName=MernDb`;

const client = new MongoClient(connectionString);
let conn;

try {
  conn = await client.connect();
  console.log("✅ Connection successful");
} catch (e) {
  console.error("❌ MongoDB Connection Error:", e);
}

let db = conn?.db("MernDb");
export default db;
