export const objectToArray = (obj: Record<string, CoinInfo>) => {
  const result = [] as Array<{}>
  if (Object.keys(obj)) {
    for (const key in obj) {
      result.push(obj[key])
    }
  }
  return result
}
