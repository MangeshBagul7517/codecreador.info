import mongoose from 'mongoose';

// Get the MongoDB URI from environment variables
const MONGODB_URI = process.env.MONGODB_URI;

console.log(MONGODB_URI, "MONGODB_URI");

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

// Initialize cache globally
let cached = global.cached || { conn: null, promise: null };

// Ensure cached is properly assigned if not set yet
if (!global.cached) {
  global.cached = cached;
}

export default async function connectDB() {
  console.log('Checking cached mongoose connection...');

  // If a cached connection exists, return it
  if (cached.conn) {
    console.log('Returning cached mongoose connection...');
    return cached.conn;
  }

  // If no cached promise exists, create a new connection
  if (!cached.promise) {
    console.log('Establishing new mongoose connection...');
    cached.promise = mongoose
      .connect(MONGODB_URI)
      .then((mongooseInstance) => {
        console.log('Mongoose connection established successfully!');
        return mongooseInstance;
      })
      .catch((error) => {
        console.error('Error establishing mongoose connection:', error.message);
        throw new Error('Failed to connect to MongoDB');
      });
  }

  // Cache the established connection
  cached.conn = await cached.promise;
  console.log('Returning the established mongoose connection...');
  return cached.conn;
}
