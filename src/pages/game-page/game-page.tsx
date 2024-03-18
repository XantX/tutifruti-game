import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ButtomPixel from "../../components/buttom/buttom-pixel";
import CounterPixel from "../../components/counter/counter-pixel";

function GamePage() {
  const game = useSelector((state) => state.game);
  const [isActiveTimer, setIsActiveTimer] = useState(true)
  const [randomLetter, setRandomLetter] = useState('');
  const [rounds, setRounds] = useState(1);
  console.log(game)

  const generateRangomLetter = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomIndex = Math.floor(Math.random() * letters.length);
    const newRandomLetter = letters[randomIndex];
    setRandomLetter(newRandomLetter);
  }

  useEffect(() => {
    generateRangomLetter();
  }, []);
  return (
    <>
      <div className="main-game">
        <div className="round-count">Round {rounds}/{game.roundQuantity}</div>
        <div className="time-panel">
          <CounterPixel time={game.roundTime} isActive={isActiveTimer} action={() => {
              if(rounds != game.roundQuantity) {
                setRounds(rounds + 1)
                generateRangomLetter()
                return true
              }
          }}></CounterPixel>
        </div>
        <div className="letter-panel">
          {randomLetter}
        </div>
        <div className="state-panel">
          <ButtomPixel styles="" title="Stop" action={() => {setIsActiveTimer(false)}}></ButtomPixel>
        </div>
      </div>
    </>
  );
}

export default GamePage;
