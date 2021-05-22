import { useState } from 'react';
import { data } from '../data.js';
import '../styles/playfield.css';

import Score from './Score';
import BestScore from './BestScore';
import Card from './Card';

const Playfield = () => {
	const [cards, setCards] = useState(shuffle(data));
	const [clickedCards, setClickedCards] = useState([]);
	const [score, setScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);

	const handleClick = (e) => {
		updateScore(e.currentTarget.id);
		setCards(shuffle(cards));
	}

	function updateScore(card) {
		if (clickedCards.includes(card)) {
			if (score > bestScore) {
				setBestScore(score);
			}
			setScore(0);
			setClickedCards([]);
		} else {
			setClickedCards((clickedCards) => clickedCards.concat(card));
			setScore((score) => score + 1);
		}
	}
	function shuffle(array) {
		const copyArray = [...array];
		for (let i = copyArray.length - 1; i > 0; i--) {
		  let j = Math.floor(Math.random() * (i + 1));
		  [copyArray[i], copyArray[j]] = [copyArray[j], copyArray[i]];
		}
		return copyArray;
	  }


	return (
		<main>
			<Score score={score} />
			<BestScore bestScore={bestScore} />
			<div id='cards-grid'>
				{cards.map(card => 
					<Card key={card.name} id={card.name} card={card} handleClick={handleClick} />
				)}
			</div>
		</main>
	);
}

export default Playfield