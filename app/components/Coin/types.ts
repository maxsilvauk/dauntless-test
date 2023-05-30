export interface ICoin {
  data: {
    image: {
      small: string
      large: string
    }
    name: string
    market_data: any
  } | null
}
