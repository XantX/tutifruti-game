import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ButtomPixel from "../../components/buttom/buttom-pixel";
import CounterPixel from "../../components/counter/counter-pixel";
import ModalPixel from "../../components/modal/modal-pixel";
import "./game-page.css"
import { Link } from "react-router-dom";

function GamePage() {
  const game = useSelector((state) => state.game);
  const [isActiveTimer, setIsActiveTimer] = useState(true)
  const [randomLetter, setRandomLetter] = useState('');
  const [rounds, setRounds] = useState(1);
  const [modalOpen, setModalOpen] = useState(false)
  const [resetCounter, setResetCounter] = useState(false)

  const [modalOpenWait, setModalOpenWait] = useState(false)

  console.log(game)

  const handleWaittoggleModal = () => {
    setModalOpenWait(!modalOpenWait)
  }

  const handleToggleModal = () => {
    setModalOpen(!modalOpen)
    handleWaittoggleModal()
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
        <div className="floating-button-container">
          <Link to="/config">
            <button className="floating-button">&#8592;</button>
          </Link>
        </div>
        <div className="round-count">
        Round {rounds}/{game.roundQuantity}
        </div>
        <div className="middle-section">
          <div className="time-panel">
            <CounterPixel reset={resetCounter} time={game.roundTime} isActive={isActiveTimer} action={() => {
              if(rounds != game.roundQuantity) {
                setIsActiveTimer(false)
                setModalOpen(true)
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

        <ModalPixel isOpen={modalOpenWait} toggleModal={handleWaittoggleModal} activeToggleModal={false}>
          <h2>Siguiente ronda</h2>
          <CounterPixel reset={false} time={5} isActive={true} action={() => {
            generateRangomLetter()
            setRounds(rounds + 1)
            setResetCounter(!resetCounter)
            setIsActiveTimer(true)
            handleWaittoggleModal()
          }}></CounterPixel>
        </ModalPixel>
      </div>
    </>
  );
}

export default GamePage;
