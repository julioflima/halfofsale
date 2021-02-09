exports.errorToMessage = (error) => {
  if (error)
    if (error.errors) {
      const message = error.errors[0].message

      const fullMessage = message[0].toUpperCase() + message.slice(1) + '.'

      return fullMessage
    }

  return 'Unexpected error.'
}
