import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    // Access the MONGO_URI variable from process.env

    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB connected");
  } catch (error) {
    console.log("DB connection failed", error);
  }
};

export default connectDB;
