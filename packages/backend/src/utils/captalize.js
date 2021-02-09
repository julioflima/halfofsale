exports.errorToMessage = (error) => {
  const message = error.errors[0].message

  const fullMessage = message[0].toUpperCase() + message.slice(1) + '.'

  return fullMessage
}
