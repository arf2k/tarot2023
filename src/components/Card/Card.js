import React from 'react';

const Card = ({ card }) => {
return (
<div className="card">
<h3>{card.name}</h3>
<p>{card.desc}</p>
<p></p>
</div>
);
};

export default Card;