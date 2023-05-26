import { getInstance } from '@/services/index';
import { BASE_API_PATH } from '@/constants/global';

// Axios Sevice for calling Next API
class CoinService {
  constructor() {
    this.axios = getInstance({
      BASE_API_PATH,
    });
  }

  // Get coin markets data
  async getCoinMarkets(vs_currency = 'usd', per_page = 45) {
    return await this.axios.get(
      `${BASE_API_PATH}coin-markets?vs_currency=${vs_currency}&order=market_cap_desc&per_page=${per_page}`
    );
  }

  // Get individual coin data
  async getCoin(symbol) {
    return await this.axios.get(`${BASE_API_PATH}coin/${symbol}`);
  }
}

// Create CoinMarketsService instance
const coinService = new CoinService(getInstance({ BASE_API_PATH }));
export default coinService;
