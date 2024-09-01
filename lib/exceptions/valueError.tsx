export default class ValueError extends Error {
  digest = 'ValueError'

  constructor(message) {
    super(message)
  }
}
