import React, { useState, useEffect } from 'react';
import {fetchAllCards} from '../../api/api';
import Card from '../Card/Card';

function AllCards() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetchAllCards()
      .then(response => {
           setCards(response);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

console.log(cards)
// const fetchAllCards = () => {
//      return fetch("https://tarot-api.onrender.com/api/v1/")
//        .then(response => response.json())
//        .then(data => console.log(data))
//        .catch(error => {
//          console.error(error);
//          return [];
//        })
//      }

// useEffect(() => {
//      const fetchCards = (async) => {
//        return fetch(`https://tarot-api.onrender.com/api/v1/`)
//           .then((resp) => resp.json())
//          .then((data) => {
//           console.log(data)
//           setCards(data);
//          });
//      }
// fetchCards()
//      }, [])
//      console.log(cards)

  return (
    <div className="all-cards">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="cards">
          {cards.map(card => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      )}
    </div>
  );
}

export default AllCards;
