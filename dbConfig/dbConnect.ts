import mongoose from "mongoose";


type ConnectionObject = {
  isConnected?: number;
};
const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("database connected already");
    return;
  } else {
    mongoose
      .connect(process.env.DATABASE_URL || "", {})
      .then((db) => {
        connection.isConnected = db.connections[0].readyState;
        console.log("Database Connected");
      })
      .catch((err) => {
        console.log("connection failed", err);
        process.exit(1);
      });
  }
}

export default dbConnect;
