export const convertTime = (timestamp: number) => {
  const currentDateLength = new Date().getTime().toString().length
  const timestampString = timestamp.toString()
  const deltaLength = Math.abs(currentDateLength - timestampString.length)
  return parseInt(timestampString + '0'.repeat(deltaLength), 10)
}
