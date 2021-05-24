import '../styles/score.css';

const Score = (props) => {
    return (
        <div id='score' onAnimationIteration={props.stopAnimation}>
            <p><strong>Score: {props.score}</strong></p>
        </div>
    );
}

export default Score