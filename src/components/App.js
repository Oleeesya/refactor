import React, { useEffect, useState } from 'react';
import api from '../utils/API';
import Page from './Page';

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchAPI() {
      let json = await api.getCard();
      let newData = [];
      json.forEach((item) => {
        newData.push({
          id: item.id,
          title: item.title,
          link_title: item.link_title,
          link: item.link,
          text: item.body ? item.body.en.substr(0, 50) + '...' : null,
        })
      });

      setCards(newData)
    }
    fetchAPI()
  }, [])

  return (
    <div className="app">
      <Page cards={cards} />
    </div>
  );
}

export default App;
