import '../styles/score.css';

const Score = (props) => {
    return (
        <div id='score' onAnimationIteration={props.stopAnimation}>
            <p>Score: {props.score}</p>
        </div>
    );
}

export default Score