const BASE_URL = "https://www.api.news-explorer.tk2.students.nomoreparties.site";
// const BASE_URL = "http://34.135.176.110:3005"

const transfomToUIModel =  (card)=>{
  return {
    keyword:  card.keyword,
    title: card.title,
    text: card.description,
    description: card.text,
    publishedAt: card.date,
    source: {name:card.soruce},
    url : card.link,
    urlToImage : card.image,
    _id:card._id
  }
}

const transfomToBackendModel =  (card)=>{
  return {
    keyword:  card.keyword,
    title: card.title,
    text: card.description,
    date: card.publishedAt,
    source: card.source.name,
    link : card.url,
    image: card.urlToImage
  }
}

class MainApi {
    register = (email, password, name) => {
        return fetch(`${BASE_URL}/signup`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password, name }),
        }).then((res) => {
          return res.json();
        });
    };

    login = (email, password) => {
        return fetch(`${BASE_URL}/signin`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            if (data.token) {
              localStorage.setItem("token", data.token);
            }
            return data;
          });
    };

    getContent (token  = localStorage.getItem("token")) {
        return fetch(`${BASE_URL}/users/me`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => res.json())
          .then((data) => data);
    };

    getArticles (token =localStorage.getItem("token")) {
        return fetch(`${BASE_URL}/articles`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => res.json())
          .then((articles=[])=>{
            return articles.map(article => transfomToUIModel(article));
          })
    };
    

    saveArticle (card, token = localStorage.getItem("token")) {
        const article = transfomToBackendModel(card);
        return fetch(`${BASE_URL}/articles`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(article),
        })
          .then((res) => res.json());
    };

    deleteArticle (cardID, token = localStorage.getItem("token")) {
        return fetch(`${BASE_URL}/articles/${cardID}`, {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
    };
}

const mainApi = new MainApi();
export default mainApi;
  