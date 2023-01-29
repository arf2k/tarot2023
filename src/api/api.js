
export const fetchAllCards = () => {
     return fetch("https://tarot-api.onrender.com/api/v1/")
       .then(response => response.json())
       .then(data => console.log(data.cards))
       .catch(error => {
         console.error(error);
         return [];
       });
   };

