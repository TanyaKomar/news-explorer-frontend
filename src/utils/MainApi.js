const BASE_URL = "http://localhost:3005";

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

    getArticles (token) {
        return fetch(`${BASE_URL}/articles`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => res.json())
    };

    saveArticle ({ keyword, title, description, publishedAt, source, urlToImage }, token) {
        return fetch(`${BASE_URL}/articles`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ keyword, title, description, publishedAt, source, urlToImage}),
        })
          .then((res) => res.json());
    };

    deleteArticle (cardID, token) {
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
  