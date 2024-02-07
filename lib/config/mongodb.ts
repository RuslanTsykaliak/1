// mongodb.ts

import mongoose from "mongoose";

export const ConnectDB = async (): Promise<void> => {
  try {
    const mongoURI = process.env.MONGODB;

    if (!mongoURI) {
      console.error("MONGODB URI is not defined in the environment variables");
      return;
    }

    await mongoose.connect(mongoURI);
    // console.log("DB connection established");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}
