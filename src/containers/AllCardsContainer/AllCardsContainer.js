import React, { useState, useEffect } from 'react';
import { fetchAllCards } from '../../api/api'
import AllCards from '../../components/AllCards/AllCards';

const AllCardsContainer = () => {
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
   return (
     <AllCards cards={cards} isLoading={isLoading} error={error} />
   );
 };

export default AllCardsContainer;