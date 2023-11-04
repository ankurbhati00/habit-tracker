import mongoose from "mongoose";

async function main() {
  try {
    const db = await mongoose.connect("mongodb://127.0.0.1:27017/habito_app_db");
    console.log("mongoose connected successfuly..");
  } catch (error) {
    console.log("Error in mongoose connect", error);
  }
}

main();

export default mongoose;