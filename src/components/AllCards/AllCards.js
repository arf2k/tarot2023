import Card from '../Card/Card';


const AllCards = ({ cards, isLoading, error }) => {
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
   };




export default AllCards;
