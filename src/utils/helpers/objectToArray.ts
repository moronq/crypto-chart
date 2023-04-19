export const objectToArray = (obj: Record<string, CoinInfo>) =>
  Object.keys(obj).length ? Object.values(obj) : ([] as Array<{}>)
