import { api } from '../../../instance'

export const requestCoinList = () =>
  api.get<RequestCoinList>('blockchain/list', {
    params: {
      api_key: '1e896ce93e5cef31925b7fe2f38cf8039ef68d46e21b0dbbf80b4cfbe36cd3e3'
    }
  })
