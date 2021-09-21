import './SavedNews.css';
import React from 'react';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import Header from '../Header/Header';
import NewsCardList from '../NewsCardList/NewsCardList';
import mainApi from '../../utils/MainApi';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function SavedNews({isLoggedIn, logout}) {
  const currentUser = React.useContext(CurrentUserContext);
  const [cards, setCards] = React.useState([]);
  const [refreshId, setRefreshId] = React.useState();
  const refresh = ()=>{
    if (refreshId>0){
      setRefreshId(-1)
    }else{
      setRefreshId(1)
    }
  }

  
  const getKyewordString = (cards)=>{
    const keywords = [...new Set( cards.map(card=>card.keyword))];
    let result = keywords.slice(0,2).join(', ');
    if(keywords.length>2){
        result += ` and ${keywords.length-2} other`
    }
    return result;
  }

  React.useEffect(() => {
    mainApi
        .getArticles()
        .then((cards) => {
          setCards(cards);
          
        })
        .catch((error) => {
          console.error(error);
        });
    },[refreshId]);

  return (
    <div className="saved-news">
      <SavedNewsHeader isLoggedIn={isLoggedIn} logout={logout} isHome={false}/>
      <section className="saved-news-header">
          <h2 className="saved-news-header__title">Saved articles</h2>
          <p className="saved-news-header__text">{currentUser && currentUser.name}, you have{` ${cards.length}`}{' '}saved article{cards.length !== 1 ? 's' : ''}</p>
          {cards.length > 0 && <p className="saved-news-header__keyword">By keywords:&#160;<span className="saved-news-header__accent">{getKyewordString(cards)}</span>
          </p>}
      </section>
      <NewsCardList refresh={refresh} cards={cards} isHome={false} isLoggedIn={true} />
    </div>
  );
}

export default SavedNews;
