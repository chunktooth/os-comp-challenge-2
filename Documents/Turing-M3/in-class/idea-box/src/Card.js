import React from 'react';
import './Card.css'

const Card = ({ title, desc, id, deleteIdea }) => {
	return (
		<div className="Card">
			<h1>{title}</h1>
			<p>{desc}</p>
			<button onClick={() => deleteIdea(id)}>X</button>
		</div>
	)
}

export default Card;