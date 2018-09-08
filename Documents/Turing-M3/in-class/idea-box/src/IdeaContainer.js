import React from 'react';
import Card from './Card';
import './IdeaContainer.css';

const IdeaContainer = ({ ideas, deleteIdea }) => {
	const ideaCards = ideas.map(idea => 
		<Card {...idea} key={idea.title} deleteIdea={deleteIdea} />
	)

	return (
		<div className="Idea-container">
			{ideaCards}
		</div>
	)
}

export default IdeaContainer;