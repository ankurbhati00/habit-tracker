import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
async function main() {
  try {
    const db = await mongoose.connect(process.env.mongoUrl);
    console.log("mongoose connected successfuly..");
  } catch (error) {
    console.log("Error in mongoose connect", error);
  }
}

main();

export default mongoose;