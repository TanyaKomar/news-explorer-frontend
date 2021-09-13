const baseUrl = "https://nomoreparties.co/news/v2/everything";
const KEY = "11e1ee55737a449884c6f0787e40392b";
const moment = require('moment');
const currentDate = moment().format("YYYY-MM-DD");
const pastDate = moment().subtract(7, "days").format("YYYY-MM-DD");

class NewsApi {
    getCards (keyword) {
        return fetch(`${baseUrl}?q=${keyword}&from=${pastDate}&to=${currentDate}&pageSize=100&language=en&apiKey=${KEY}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => data);
    };
}

const newsApi = new NewsApi();
export default newsApi;
  