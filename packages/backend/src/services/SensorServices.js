module.exports = class SensorServices {
  static date(timestamp) {
    const dateFull = new Date(timestamp).getTime()

    return dateFull
  }
}
