import React, { useState, useEffect } from 'react';
import { fetchAllCards } from './api/api';

const AllCardsPage = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const allCards = await fetchAllCards();
      console.log(allCards)
      setCards(allCards);
    };

    fetchData();
  }, []);

  return (
    <div>
      {cards.map((card) => (
        <div key={card.id}>
          <h2>{card.name}</h2>
          <p>{card.meaning}</p>
        </div>
      ))}
    </div>
  );
};

export default AllCardsPage;