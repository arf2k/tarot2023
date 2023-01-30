
export const fetchAllCards = () => {
     return fetch("https://tarot-api.onrender.com/api/v1/")
       .then(response => {
         console.log(response)
         return response.json()
       })
       .then(data => {
         return data.cards;
       })
       .catch(error => {
         console.error(error);
         return [];
       });
   };