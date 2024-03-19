import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ButtomPixel from "../../components/buttom/buttom-pixel";
import CounterPixel from "../../components/counter/counter-pixel";
import ModalPixel from "../../components/modal/modal-pixel";
import "./game-page.css"

function GamePage() {
  const game = useSelector((state) => state.game);
  const [isActiveTimer, setIsActiveTimer] = useState(true)
  const [randomLetter, setRandomLetter] = useState('');
  const [rounds, setRounds] = useState(1);
  const [modalOpen, setModalOpen] = useState(false)
  const [resetCounter, setResetCounter] = useState(false)
  console.log(game)

  const handleToggleModal = () => {
    setModalOpen(!modalOpen)
    generateRangomLetter()
    setRounds(rounds + 1)
    setResetCounter(!resetCounter)
    setIsActiveTimer(true)
  }
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
        <div className="middle-section">
          <div className="time-panel">
            <CounterPixel reset={resetCounter} time={game.roundTime} isActive={isActiveTimer} action={() => {
            if(rounds != game.roundQuantity) {
            setRounds(rounds + 1)
            generateRangomLetter()
            return true
            }
            }}></CounterPixel>
            <p>Segundos</p>
          </div>
          <div className="letter-panel">
            <p className="letter">{randomLetter}</p>
            <p>Letra</p>
          </div>
        </div>
        <div className="state-panel">
          <ButtomPixel styles="button-pixel-config" title="Stop" action={() => {
            if(rounds == game.roundQuantity) {
              setIsActiveTimer(false)
              //View results
              console.log('Mira los resultados')
            } else {
              setIsActiveTimer(false)
              setModalOpen(true)
            }
          }}></ButtomPixel>
        </div>
        <ModalPixel isOpen={modalOpen} toggleModal={handleToggleModal} activeToggleModal={true}>
          <h2>Carga los resultados</h2>
        </ModalPixel>
      </div>
    </>
  );
}

export default GamePage;
