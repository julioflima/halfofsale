exports.getNameFile = (nameFile, versionMajor, ...rest) => {
  const nameFileSplitted = nameFile.includes(' ') ? nameFile.split(' ') : nameFile

  const removedBlanks = nameFileSplitted.filter((item) => item !== '')

  const addRest = [...removedBlanks, 'v' + versionMajor, ...rest]

  const joinedWithUnderScore = addRest.join('_')

  return joinedWithUnderScore
}
