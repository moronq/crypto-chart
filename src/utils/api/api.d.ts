interface CoinList {}

interface RequestCoinList {
  Data: Record<string, CoinInfo>
}
interface RequestExchange {
  Data: Array<Histohour>
}
