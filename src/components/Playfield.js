import { data } from '../data.js';
import '../styles/playfield.css';

import Score from './Score';
import BestScore from './BestScore';
import Card from './Card';

const Playfield = () => {
	return (
		<main>
			<Score />
			<BestScore />
			<div id='cards-grid'>
				{data.map(card => 
					<Card key={card.name} card={card} />
				)}
			</div>
		</main>
	);
}

export default Playfield