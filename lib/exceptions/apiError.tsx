export default class ApiError extends Error {
  digest = 'ApiError'

  constructor(message) {
    super(message)
  }
}
