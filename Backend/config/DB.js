import mongoose from "mongoose"
import { config } from "./config.js"

export const ConnectDB = async () => {
  try {
    const conn = await mongoose.connect(config.MONGO_URI)
    if (conn) {
      console.log(`Database connected on ${conn.connection.host}`)
    }
  } catch (error) {
    console.log(error)
  }
}
