import { useState, useEffect } from 'react';
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
		setScrollY(window.scrollY);
	}
	function updateScore(card) {
		const scoreDiv = document.getElementById('score');
		if (clickedCards.includes(card)) {
			if (score > bestScore) {
				const bestScoreDiv = document.getElementById('bestscore');
				setBestScore(score);
				bestScoreDiv.style.animationName = 'bestScore';
			}
			setScore(0);
			setClickedCards([]);
			scoreDiv.style.animationName = 'negative';
		} else {
			setClickedCards((clickedCards) => clickedCards.concat(card));
			setScore((score) => score + 1);
			scoreDiv.style.animationName = 'positive';
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

	const [scrollY, setScrollY] = useState(0);
	useEffect(() => {
		window.scroll(0, scrollY);
	});

	const cardsDiv = document.querySelectorAll('.card');
	useEffect(() => {
		cardsDiv.forEach(card => card.style.animationName = 'showUp');
	});

	function stopAnimation(e) {
		e.target.style.animationName = 'none';
	}

	return (
		<main>
			<div id='scoreboard'>
				<Score score={score} stopAnimation={stopAnimation} />
				<BestScore bestScore={bestScore} stopAnimation={stopAnimation}/>
			</div>
			<div id='cards-grid'>
				{cards.map(card => <Card key={card.name} 
						  				 id={card.name} 
										 card={card} 
										 handleClick={handleClick}
										 stopAnimation={stopAnimation} />
				)}
			</div>
		</main>
	);
}

export default Playfield