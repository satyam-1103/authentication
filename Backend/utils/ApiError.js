import { StatusCodes } from "http-status-codes"

export class ApiError extends Error {
  constructor(statusCode, message = "Something went wrong") {
    super(message)
    this.statusCode = statusCode
    this.message = message
    this.success = false
  }
}

export class AuthError extends ApiError {
  constructor(
    statusCode = StatusCodes.UNAUTHORIZED,
    message = "Unauthorized access"
  ) {
    super(statusCode, message)
  }
}

export class ServerError extends ApiError {
  constructor(
    statusCode = StatusCodes.INTERNAL_SERVER_ERROR,
    message = "Something went wrong"
  ) {
    super(statusCode, message)
  }
}
