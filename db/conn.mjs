import { MongoClient } from "mongodb";

// Connection URL and Database
const url = ''
const dbName = ''

let db = null;

// Function to connect database
export async function connect() {
    if (db) {
      return db;
    }
  
    try {
      const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
      await client.connect();
      console.log('Connected to MongoDB');
  
      db = client.db(dbName);
      return db;
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      throw error;
    }
  }

//   Function to get the databse instance
export function getDb() {
    if (!db) {
      throw new Error('Database not initialized. Call connect() first.');
    }
    return db;
  }