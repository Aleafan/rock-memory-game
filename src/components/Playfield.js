import { data } from '../data.js';
import '../styles/playfield.css';

import Card from './Card';

const Playfield = () => {
	return (
		<main>
			<div id='cards-grid'>
				{data.map(card => 
					<Card key={card.name} card={card} />
				)}
			</div>
		</main>
	);
}

export default Playfield