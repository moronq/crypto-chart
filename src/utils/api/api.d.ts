interface CoinList {}

interface RequestCoinList {
  Data: Record<string, CoinInfo>
}
interface RequestExchange {
  Data: Array<Histohour>
}
type RequestsIntervalType = 'day' | 'month' | 'threeDays' | 'week'
