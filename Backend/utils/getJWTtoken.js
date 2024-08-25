import jwt from "jsonwebtoken"
import { config } from "../config/config.js"

export const getJWTtoken = (id) => {
  return jwt.sign({ _id: id }, config.JWT_SECRET, {
    expiresIn: config.JWT_EXPIRY,
  })
}
