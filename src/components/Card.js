import '../styles/card.css';

const Card = (props) => {
    const {name, image} = props.card;
    
    return (
        <div className='card'>
            <img className='card-pic' src={image} alt={name} />
            <p>{name}</p>
        </div>
    );
}

export default Card