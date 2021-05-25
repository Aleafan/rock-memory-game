import '../styles/bestscore.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';

const BestScore = (props) => {
    return (
        <div>
            <p id='bestscore' onAnimationIteration={props.stopAnimation}>
                <FontAwesomeIcon icon={faTrophy} />
                Best Score: {props.bestScore}
            </p>
        </div>
    );
}

export default BestScore