import "./GameOver.css";

const GameOver = ({ retry, score }) => {
  return (
    <div>
      <h1>Você perdeu, noob!</h1>
      <h2>
        A sua pobtuação foi: <span>{score}</span>
      </h2>
      <button onClick={retry}>Tentar novamente!</button>
    </div>
  );
};

export default GameOver;
