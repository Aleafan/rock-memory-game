import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGuitar } from '@fortawesome/free-solid-svg-icons';
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons';
import '../styles/header.css';

const Header = () => {
    return (
        <header>
            <h1>
                <FontAwesomeIcon icon={ faGuitar } />
                R
                <FontAwesomeIcon icon={ faCompactDisc } />
                CK MEM
                <FontAwesomeIcon icon={ faCompactDisc } />
                RY GAME
            </h1>
            <p>Get points by clicking on an image but don't click on any more than once!</p>
        </header>
    );
}

export default Header