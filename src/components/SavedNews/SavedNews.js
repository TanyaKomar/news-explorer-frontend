import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import mainApi from '../../utils/MainApi';

function SavedNews() {
  const [cards, setCards] = React.useState([]);
  const [refreshId, setRefreshId] = React.useState();
  const refresh = ()=>{
    if (refreshId>0){
      setRefreshId(-1)
    }else{
      setRefreshId(1)
    }
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
    <NewsCardList refresh={refresh} cards={cards} isHome={false} isLoggedIn={true} />
  );
}

export default SavedNews;
